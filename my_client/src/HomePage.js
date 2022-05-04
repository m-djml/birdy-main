import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import './HomePage.css';
import Stats from './Stats';
import { UserIdContext } from './App';
import { useContext } from 'react';
import Login from './Login';

function HomePage(){
    const userId = useContext(UserIdContext);

    return (
        <>
        {userId ? (
            <div className="homepage">
                <Sidebar/>
                <Feed/>
                <Stats/>

                
            </div>
        ) : (
            <Login/>
        )}
        </>
    );
}

export default HomePage