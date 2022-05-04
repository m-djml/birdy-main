import React from 'react'
import Sidebar from './Sidebar';
import './ProfilPage.css'
import UserProfil from './UserProfil';
import Stats from './Stats';
import { UserIdContext } from './App';
import { useContext } from 'react';
import Login from './Login';

function ProfilePage() {
  const userId = useContext(UserIdContext);
  
    return (
      <>
      {userId ? (
        <div  className='profilpage'>
          <Sidebar/>
          <UserProfil/>
          <Stats/>
        </div>
      ) : (
        <Login/>
      )}
      </>
    );

}

export default ProfilePage