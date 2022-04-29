import React from 'react';
import "./SidebarOption.css"
import SvgIcon from '@mui/material/SvgIcon';
import { NavLink } from 'react-router-dom'

class SidebarOption extends React.Component{

    render(){
        return (
        <NavLink to={this.props.path} className="navOption">
        <div className="sidebarOption">
            <SvgIcon component={this.props.SvgIcon} />
            <h2>{this.props.text}</h2>
        </div>
        </NavLink>
    )
    }
}
export default SidebarOption;
