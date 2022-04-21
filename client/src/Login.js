import React from "react";
import { Link } from "react-router-dom";

import './Login.css';


class Login extends React.Component{
    constructor(props){
      super(props);
      this.getConnected=props.getConnected;
    }

    render(){
      return(
        <div className="loginpage">
            <div className="form">
                <input type="text" id="username" name="username" placeholder="Username"/>
                <input type="password" id="password" name="password" placeholder="Password"/>
                <button className="button">Connexion</button>
            </div>
            
            <div className="inscription">
                <p className="txt">Vous n'avez pas encore de compte ?</p>
                <button className = "signin">Créer un compte</button>
            </div>

              {/* <Link to="/">Retour</Link> */}
        </div>
      );
    }
}

export default Login;
