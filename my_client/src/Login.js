import React from "react";
import './Login.css';
import logo from './oizo.png';
import { Link } from "react-router-dom"


class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username : '',
        password : ''
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
        password : this.state.password
      }
      console.log(userData);
    }

    render(){
      return(
        <div className="loginpage">
            <div className="bienvenue">
              <h1 className="birdy">Bienvenue sur Birdy</h1>
              <img className="logo" src={logo} alt="logo"/>
            </div>

            <div className="form_login">
                <form action="http://localhost:8080/api/user" method="GET">
                  <input id ='username' type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                  <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                  <button className="button" onSubmit={this.handleSubmit} >Connexion</button>
                </form>
            </div>

            <div className="inscription">
                <p className="txt">Vous n'avez pas encore de compte ?</p>
                <Link to="/register" className = "signin">Créer un compte</Link>
            </div>
        </div>
      );
    }
}

export default Login;
