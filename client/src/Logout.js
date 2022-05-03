import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';
import SvgIcon from '@mui/material/SvgIcon';
import { NavLink } from 'react-router-dom';

function Logout() {
    const handleLogout = async () => {
        try {
            await axios({
                method : "get",
                url: "http://localhost:8080/api/user/logout",
                withCredentials: true,
            })

            if (window !== "undefined") {
                console.log("je passe ici")
                cookie.remove('accessToken', { expires: 1 });
            }
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <NavLink onClick={handleLogout} to="/login" className="navOption">
        <div className="sidebarOption">
            <SvgIcon component={LogoutIcon} />
            <h2>Déconnexion</h2>
        </div>
        </NavLink>
    </div>
  )
}

export default Logout