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
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="sidebar">
            <img className="logo" src={logo} alt="logo"/>
            <SidebarOption SvgIcon={HomeRoundedIcon} text="Home"/>
            <SidebarOption SvgIcon={AccountCircleIcon} text="Profil" />
            <SidebarOption SvgIcon={ContactsIcon} text="Abonnés"/>
            <SidebarOption SvgIcon={ContactsIcon} text="Abonnements"/>
            <SidebarOption SvgIcon={SearchIcon} text="Explorer"/>
            <SidebarOption SvgIcon={LogoutIcon} text="Déconnexion"/>
            
        </div>

        );
    }
}


export default Sidebar;