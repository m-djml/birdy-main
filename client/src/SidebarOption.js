import React from 'react';
import "./SidebarOption.css"
import SvgIcon from '@mui/material/SvgIcon';


class SidebarOption extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="sidebarOption">
            <SvgIcon component={this.props.SvgIcon} />
            <h2>{this.props.text}</h2>
        </div>
    )
    } 
}
export default SidebarOption;