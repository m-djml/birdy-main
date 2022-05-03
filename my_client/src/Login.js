import React from "react";
import './Login.css';
import logo from './oizo.png';
import { Link } from "react-router-dom"
import axios from 'axios';


class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username : '',
        password : ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);

    }

    handleChange(e) {
      this.setState({ [e.target.name] : e.target.value });
    }

    handleLogin(e) {
      e.preventDefault();
      const errorLogin = document.querySelector(".errorlogin");
      const errorusername = document.querySelector(".err_username");

      const userData = {
        username : this.state.username,
        password : this.state.password
      }
      axios({
        method: "post",
        url: "http://localhost:8080/api/user/login",
        withCredentials: true,
        data: userData,
      })
            .then((res) => {
              console.log(res);
              if(res.data.errors){
                errorusername.innerHTML = res.data.errors.username;
                errorLogin.innerHTML = res.data.errors.password;
              }
              else if(res.data.errors){
                errorLogin.innerHTML = res.data.errors;
              }
              else{
                window.location = "/";
              }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
      return(
        <div className="loginpage">
            <div className="bienvenue">
              <h1 className="birdy">Bienvenue sur Birdy</h1>
              <img className="logo" src={logo} alt="logo"/>
            </div>

            <div className="form_login">
                <form onSubmit={this.handleLogin}>
                  <input id ='username' type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                  <div className="err_username"></div>
                  <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                  <div className="errorlogin"></div>
                  <input type="submit" className="button" value="Connexion"/>
                </form>

            </div>

            <div className="inscription">
                <p className="txt">Vous n'avez pas encore de compte ?</p>
                <Link to="/register" className = "log_signup">Créer un compte</Link>
            </div>
        </div>
      );
    }
}

export default Login;
