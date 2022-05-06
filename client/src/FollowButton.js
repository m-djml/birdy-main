import { Button } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { follow, unfollow } from './actions/user_actions';


function FollowButton(props) {
    const [followed, setFollowed] = useState(false);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();


    const handleFollow = (e) => {
        dispatch(follow(userData._id, props.idTo))
        .then((res) => {
            console.log(res);
            setFollowed(true);
            //props.setFollowing(res.data.user.following);
        })
    }
    
    const handleUnFollow = (e) => {
        dispatch(unfollow(userData._id, props.idTo))
        .then((res) => {
            console.log(res);
            setFollowed(false);
            //props.setFollowing(res.data.user.following);
        })

    }


    useEffect(() => {
        if (userData.following) {
          if (userData.following.includes(props.idTo)) {
            setFollowed(true);
          } else setFollowed(false);
        }
      },[]);

    return (
        <>
      {followed ? 
          <>
          <Button onClick={handleUnFollow}>Ne plus suivre</Button>
          </>
          :
          <>
          <Button onClick={handleFollow}>Suivre</Button>
          </>
      }
      </>
    )
}

export default FollowButton