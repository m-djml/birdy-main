import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import './HomePage.css';
import Stats from './Stats';

class HomePage extends React.Component {

    render(){
        return (
            <div className="homepage">
                <Sidebar/>
                <Feed/>
                <Stats/>

            </div>
          );
    }
}

export default HomePage
