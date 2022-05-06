import React from 'react';
import "./Follow.css";
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';


function Followers() {
  const userData = useSelector((state) => state.userReducer);
  const allUsersData = useSelector((state) => state.allUsersReducer);
  
  return (
    <div className='follow'>
      <h1>Abonnés : {userData.followers ? userData.followers.length : ""}</h1>
        {allUsersData.map((user) => {
          if(userData.followers){
            for(let i = 0; i< userData.followers.length; i++){
              if(user._id === userData.followers[i]){
                return (
                  <li className="person"key={user._id}>
                    <div className= 'sugg_avatar'>
                      <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
                    </div>
                    <h4>@{user.username}</h4>
                  </li>
                )
              }
            }
          }
        })}
    </div>
  )
}

export default Followers