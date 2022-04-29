import React from 'react'
import Sidebar from './Sidebar';
import './ProfilePage.css'
import UserProfil from './UserProfil';
import Stats from './Stats';

class ProfilePage extends React.Component {
  render(){
    return (
        <div  className='profilepage'>
          <Sidebar/>
          <UserProfil/>
          <Stats/>
        </div>
    );
  }

}

export default ProfilePage
