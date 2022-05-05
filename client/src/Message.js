import React, { useContext, useState, useEffect } from 'react'
import './Message.css'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessages, likeMsg, unlikeMsg } from './actions/message_actions';
import { UserIdContext } from './App';
import LikeButton from './LikeButton';


function Message(props){

    // const [liked, setLiked] = useState(false);
    // const userId = useContext(UserIdContext);
    // const userData = useSelector((state) => state.userReducer)
    // const dispatch = useDispatch();

    // const handleLike = (e) => {
    //     e.preventDefault();
    //     dispatch(likeMsg(props.id, userData._id));
    //     setLiked(true);
    //     window.location = "/";
    // }

    // const handleUnlike = (e) => {
    //     e.preventDefault();
    //     dispatch(unlikeMsg(props.id, userData._id));
    //     setLiked(false);
    //     window.location = "/";
    // }

    // useEffect(() => {
    //     if (props.likers.includes(userId)) setLiked(true);
    //     else setLiked(false);
    //   }, [userId, props.likers, liked]);

        return (
        <li className='message' key={props.id}>
            <div className= 'message_avatar'>
            <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
            </div>
            <div className='message_body'>
                <div className='message_header'>
                    <h3>@{props.author}</h3>
                </div>
                <div className='message_content'>
                    <p>{props.contenu}</p>
                </div>
                <>
                <LikeButton author_id = {props.author_id} id={props.id} author={props.author} likers ={props.likers} likes={props.likes} />
                </>
                {/* {liked ? 
                <>
                <FavoriteBorderIcon onClick={handleUnlike}/>
                <h5>{props.likes}</h5>
                </>
                :
                <>
                <FavoriteBorderIcon onClick={handleLike}/>
                <h5>{props.likes}</h5>
                </>
                } */}
            </div>
            <div className='message_footer' >
                <p>{props.date.split("T")[0]}</p>
                <p>à {props.date.split("T")[1].split(".")[0]}</p>
            </div>
        </li>
        )
}
export default Message