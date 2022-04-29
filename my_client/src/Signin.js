import React from "react";
import logo from './oizo.png';
import './Signin.css';
import { Link } from "react-router-dom"

class Signin extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username : '',
      email : '',
      password : '',
      confirmpassword : '',
      firstName : '',
      lastName : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      username : this.state.username,
      email : this.state.email,
      password : this.state.password,
      confirmpassword : this.state.confirmpassword,
      firstName : this.state.firstName,
      lastName : this.state.lastName
    }

    console.log(userData);

  }

    render(){
      return (
        <div className="register">
          <div className="bienvenue">
              <h1 className="birdy">Bienvenue sur Birdy</h1>
              <img className="logo" src={logo} alt="logo"/>
          </div>

          <div className="form_signin" >
          <form action="http://localhost:8080/api/user" method="POST">
            <input type="text" id="prenom" name="firstName" placeholder="Prénom" value={this.state.firstName} onChange={this.handleChange}/>
            <input type="text" id="nom" name="lastName" placeholder="Nom" value={this.state.lastName} onChange={this.handleChange}/>
            <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
            <input type="mail" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
            <input type="password" id="password" name="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handleChange}/>
            <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirmer le mot de passe" value={this.state.confirmpassword} onChange={this.handleChange}/>
            <button onSubmit={this.handleSubmit} className = "button" >Créer un compte</button>
          </form>
          </div>

          <div className="connexion">
                <p className="txt">Vous avez déja un compte ?</p>
                <Link to="/login" className = "connect">Se connecter</Link>
          </div>
        </div>

      );
    }
}

export default Signin;
