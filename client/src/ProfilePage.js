import React from 'react'
import Sidebar from './Sidebar';
import './ProfilPage.css'
import UserProfil from './UserProfil';
import Stats from './Stats';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div  className='profilpage'>
          <Sidebar/>
          <UserProfil/>
          <Stats/>
        </div>
    );
  }

}

export default ProfilePage