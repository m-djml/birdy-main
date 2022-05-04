import React from 'react';
import "./Follow.css";
import { useSelector } from 'react-redux';

function Following() {
  const userData = useSelector((state) => state.userReducer);
  const allUsersData = useSelector((state) => state.allUsersReducer);
  
  return (
    <div className='follow'>
      <h1>Abonnements : {userData.following ? userData.following.length : ""}</h1>
      <div className='following'>
        {allUsersData.map((user) => {
          for(let i = 0; i< userData.following.length; i++){
            if(user._id === userData.following[i]){
              return (
                <li key={user._id}>
                  <h4>{user.username}</h4>
                </li>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default Following