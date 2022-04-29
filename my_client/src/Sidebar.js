import React from "react";
import SidebarOption from "./SidebarOption";
import logo from './oizo.png';
import "./Sidebar.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';


class Sidebar extends React.Component{

    render(){
        return (<div className="sidebar">
            <img id="logo" src={logo} alt="logo"/>
            <SidebarOption SvgIcon={HomeRoundedIcon} text="Home" path="/homepage"/>
            <SidebarOption SvgIcon={AccountCircleIcon} text="Profil" path="/profil" />
            <SidebarOption SvgIcon={ContactsIcon} text="Abonnés" path="/"/>
            <SidebarOption SvgIcon={ContactsIcon} text="Abonnements" path="/"/>
            <SidebarOption SvgIcon={SearchIcon} text="Explorer" path="/"/>
            <SidebarOption SvgIcon={LogoutIcon} text="Déconnexion" path="/"/>

        </div>

        );
    }
}


export default Sidebar;
