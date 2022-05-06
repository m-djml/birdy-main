import React, { useContext, useState, useEffect } from 'react'
import './Message.css'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessages, likeMsg, unlikeMsg } from './actions/message_actions';
import { UserIdContext } from './App';

function LikeButton(props) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const userId = useContext(UserIdContext);
    const userData = useSelector((state) => state.userReducer);
    const messages = useSelector((state) => state.messageReducer);
    
    const dispatch = useDispatch();

    const handleLike = (e) => {
        dispatch(likeMsg(props.id, userData._id))
        .then((res) => {
            console.log(res);
            setLikes(res.data.message.likers.length);
            setLiked(true)
        })
        
    }

    const handleUnlike = (e) => {
        dispatch(unlikeMsg(props.id, userData._id))
        .then((res) => {
            console.log(res);
            setLikes(res.data.message.likers.length);
            setLiked(false)
        })

    }


  return (
      <>
    {liked ? 
        <>
        <FavoriteBorderIcon color="red" onClick={handleUnlike}/>
        <h5>{likes}</h5>
        </>
        :
        <>
        <FavoriteBorderIcon onClick={handleLike}/>
        <h5>{likes}</h5>
        </>
    }
    </>
  )
}

export default LikeButton