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
              <nav className="navigationpanel">
                <button className = "log">
                  {
                    this.isConnected ?
                      <Link to="/logout">Se déconnecter</Link> :
                      <Link to="/login">Se connecter</Link>
                  }
              </button>
              <button className = "register">
                <Link to="/register">Créer un compte</Link>
              </button>
              </nav>
        );
    }
}

export default NavigationPanel;
