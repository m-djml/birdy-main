import React from "react";
import SidebarOption from "./SidebarOption";
import logo from './oizo.png';
import "./Sidebar.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from "./Logout";


class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="sidebar">
            <img id="logo" src={logo} alt="logo"/>
            <SidebarOption SvgIcon={HomeRoundedIcon} text="Home" path="/homepage"/>
            <SidebarOption SvgIcon={AccountCircleIcon} text="Profil" path="/profil" />
            <SidebarOption SvgIcon={ContactsIcon} text="Abonnés" path="/followers"/>
            <SidebarOption SvgIcon={ContactsIcon} text="Abonnements" path="/following"/>
            {/* <SidebarOption SvgIcon={SearchIcon} text="Explorer" path="/"/> */}
            <Logout/>
        </div>

        );
    }
}


export default Sidebar;