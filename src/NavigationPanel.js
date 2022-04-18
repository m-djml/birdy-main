import React from "react";
import { Link } from "react-router-dom";
import logo from './oizo.png';
import './NavigationPanel.css';
import Login from "./Login";
import Signin from "./Signin";

class NavigationPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          currentPage : this.props.currentPage,
          isConnected : this.props.isConnected
        }
    }

    render(){
        return(
              <nav className="navigation">
                <div className="nav">
                  <div className="bienvenue">
                    <h1 className="birdy">Bienvenue sur Birdy</h1>
                    <img className="logo" src={logo} alt="logo"/>

                  </div>
                  
                  
                  {/* <Login/> */}
                  <Signin/>
                </div>
                {/* <div className="inscription">
                  <p className="txt">Vous n'avez pas encore de compte ?</p>
                  <button className = "signin">Créer un compte</button>
                </div> */}
                
              </nav>
        );
    }
}

export default NavigationPanel;
