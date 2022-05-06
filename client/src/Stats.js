import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './Stats.css';
import Suggestions from './Suggestions';

class Stats extends React.Component {
    render(){
        return (
            <div className='stats'>
                <div className='stat_searchbar'>
                    <SearchIcon className='search_icon'/>
                    <input type='text' name="search" placeholder='Rechercher...'/>
                </div>
                <div className='stat_contenu'>
                    <h3>Suggestions</h3>
                    <Suggestions/>
                </div>
            </div>
        );
    }
}

export default Stats