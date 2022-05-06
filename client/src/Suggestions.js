import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import FollowButton from './FollowButton';
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';


function Suggestions() {

    const userData = useSelector((state) => state.userReducer);
    const allUsersData = useSelector((state) => state.allUsersReducer);
    const nb_sugg = 0;

    return (
        <div className='suggestionsbox'>
            {allUsersData.map((user) => {
                let i=Math.floor(Math.random() * 2);
                if (i===1){
                if(userData.following){
                    if(!userData.following.includes(user._id)){
                        return (
                        <li className="sugg" key={user._id}>
                            <div className= 'sugg_avatar'>
                                <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
                            </div>
                            <h4>@{user.username}</h4>
                            <div className='followbutton'>
                            <FollowButton idTo={user._id} />
                            </div>
                        </li>
                        )
                    }
                }}
                })}

        </div>
    )
}

export default Suggestions