import React, { useState } from 'react';
import "./Follow.css";
import { useSelector } from 'react-redux';
import FollowButton from './FollowButton';
import Avatar from '@mui/material/Avatar';


function Following() {
  const userData = useSelector((state) => state.userReducer);
  const allUsersData = useSelector((state) => state.allUsersReducer);
  const [following, setFollowing] = useState(userData.following);

  return (
    <div className='follow'>
      <h1>Abonnements : {userData.following ? userData.following.length : ""}</h1>
      {/* <h1>Abonnements : {allUsersData ? console.log(allUsersData) : ""}</h1> */}
        
        {allUsersData.map((user) => {
          if(userData.following){
            for(let i = 0; i< userData.following.length; i++){
              if(user._id === userData.following[i]){
                return (
                  <li className="person"key={user._id}>
                    <div className= 'sugg_avatar'>
                      <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
                    </div>
                    <h4>@{user.username}</h4>
                    <div className='followbutton'>
                      <FollowButton idTo={user._id} setFollow={setFollowing}/>
                    </div>
                  </li>
                )
              }
            }
          }
        })}
    </div>
  )
}

export default Following