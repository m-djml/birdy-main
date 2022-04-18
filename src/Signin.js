import React from "react";

import './Signin.css';

class Signin extends React.Component{

    render(){
      return (
        <div className="creationpage">
          <div className="form">
          <input type="text" id="prenom" name="prenom" placeholder="Prénom"/>
          <input type="text" id="nom" name="nom" placeholder="Nom"/>
          <input type="text" id="username" name="username" placeholder="Username"/>
          <input type="mail" id="email" name="email" placeholder="Email"/>
          <input type="password" id="password" name="password" placeholder="Mot de passe"/>
          <input type="confirmpassword" id="confirmpassword" name="confirmpassword" placeholder="Confirmer le mot de passe"/>
          <button className = "button">Créer un compte</button>
          </div>
          
          <div className="connexion">
                <p className="txt">Vous avez déja un compte ?</p>
                <button className = "connect">Se connecter</button>
          </div>
        </div>
        
      );
    }
}

export default Signin;
