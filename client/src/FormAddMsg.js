import React, { useState } from 'react'
import axios from 'axios';
import './FormAddMsg.css';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { createMessage } from './actions/message_actions';
import { getAllMessages } from './actions/allmsg_actions';

function FormAddMsg(props) {
    const [message, setMessage] = useState('');
    const userData = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();

    const handleChangeMsg = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const data_to_send = {
            author_id: userData._id,
            author: userData.username,
            message : message
        };

        axios({
            method: "post",
            url: "http://localhost:8080/api/message/",
            withCredentials: true,
            data: data_to_send,
          })
          .then((res) => {
            console.log(res);
            window.location = "/";
          })
          .catch((err) => {
            console.log(err);
        })
    }
       
    
        return (<div className="formaddmsg">
            <div className='form_avatar'>
                <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
            </div>
            <form onSubmit={sendMessage}>
                <input className="messageinput" type="textarea" placeholder="Votre message" onChange={handleChangeMsg} value={message} />
                <button className="poster" >Poster</button>
            </form>
            
        </div>

        );
}


export default FormAddMsg