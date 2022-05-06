import React from 'react';
import "./Follow.css";
import { useSelector } from 'react-redux';
import defaultUserPic from './defaultUserPic.png'


function Followers() {
  const userData = useSelector((state) => state.userReducer);
  const allUsersData = useSelector((state) => state.allUsersReducer);

  return (
    <div className='follow'>
      <h1>Abonnés : {userData.followers ? userData.followers.length : ""}</h1>
      {console.log(userData)}
      <div className='following'>
        {allUsersData.map((user) => {
          for(let i = 0; i< userData.followers.length; i++){
            if(user._id === userData.followers[i]){
              return (
                <li key={user._id}>
                  <img id='profilimage' src={defaultUserPic} alt='profilimage'/>
                  <h3>{user.username}</h3>
                  <h4>{user.firstname} {user.lastname}</h4>
                  <h5>{user.bio}</h5>
                </li>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default Followers
