import React from 'react'
import './Stats.css';
class Stats extends React.Component {
    render(){
        return (
            <div className='stats'>
                <h2>Stats</h2>
                <input id='searchbar' type='text' name="search" placeholder='Rechercher...'/>
            </div>
        );
    }
}

export default Stats