import React from "react";
import logo from './oizo.png';
import './SignUp.css';
import { Link } from "react-router-dom"
import axios from 'axios'


class SignUp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username : '',
      email : '',
      password : '',
      firstname : '',
      lastname : '',
      submitted : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSignup(e) {
    e.preventDefault();
    const userData = {
      firstname : this.state.firstname,
      lastname : this.state.lastname,
      username : this.state.username,
      email : this.state.email,
      password : this.state.password

    }
    const err_username = document.querySelector(".username_err");
    const err_email = document.querySelector(".email_err");
    const err_fstname = document.querySelector(".fstname_err");
    const err_lstname = document.querySelector(".lstname_err");
    const err_pswd = document.querySelector(".pswd_err");

    axios ({
      method : "post",
      url: "http://localhost:8080/api/user/register",
      withCredentials: true,
      data: userData
    })
      .then((res) => {
        if (res.data.errors) {
          err_username.innerHTML = res.data.errors.username;
          err_email.innerHTML = res.data.errors.email;
          err_fstname.innerHTML = res.data.errors.firstname;
          err_lstname.innerHTML = res.data.errors.lastname;
          err_pswd.innerHTML = res.data.errors.password;
        }
        else{
          this.setState({submitted : true});
          console.log(this.state.submitted);
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }

    render(){
      return (
        <div className="register">
          <div className="bienvenue">
              <h1 className="birdy">Bienvenue sur Birdy</h1>
              <img className="logo" src={logo} alt="logo"/>
          </div>

          <div className="form_signup">
            {this.state.submitted ?  (
              <p className="txt">Compte crée avec succès !</p>
            ) :
          <form onSubmit={this.handleSignup}>
          <input type="text" id="prenom" name="firstname" placeholder="Prénom" value={this.state.firstname} onChange={this.handleChange}/>
          <div className="fstname_err"></div>
          <input type="text" id="nom" name="lastname" placeholder="Nom" value={this.state.lastname} onChange={this.handleChange}/>
          <div className="lstname_err"></div>
          <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
          <div className="username_err"></div>
          <input type="mail" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
          <div className="email_err"></div>
          <input type="password" id="password" name="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handleChange}/>
          <div className="pswd_err"></div>
          {/* <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirmer le mot de passe" value={this.state.confirmpassword} onChange={this.handleChange}/> */}
          <input type="submit" className = "button" value="Créer un compte" />
          </form>
        }
          </div>

          <div className="connexion">
                <p className="txt">Vous avez déja un compte ?</p>
                <Link to="/login" className = "connect">Se connecter</Link>
          </div>
        </div>

      );
    }
}

export default SignUp;
