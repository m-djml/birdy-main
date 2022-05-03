import React from 'react';
import Sidebar from './Sidebar';
import Stats from './Stats';
import { UserIdContext } from './App';
import { useContext } from 'react';
import Login from './Login';
import "./FollowPage.css"
import Following from './Following';
import Followers from './Followers';

function FollowPage(props) {
    const userId = useContext(UserIdContext);
  
    return (
      <>
      {userId ? (
        <div className='followingpage'>
          <Sidebar/>
          {props.followers ? 
          <Followers/> :
          <Following/>}
          <Stats/>
        </div>
      ) : (
        <Login/>
      )}
      </>
    );

}

export default FollowPage