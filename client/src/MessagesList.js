import React, { useEffect, useContext } from 'react'
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages } from './actions/allmsg_actions';
import { UserIdContext } from './App';

function MessagesList (){

    const userId = useContext(UserIdContext);
    const messages = useSelector((state) => state.allMsgReducer);


    return (<div className="messageslist">
        {messages.map((msg) => {
            return <Message id={msg._id} author={msg.author} contenu={msg.message} likes={msg.likers.length} date = {msg.createdAt}/>;
        })}
        </div>      
    );
}

export default MessagesList