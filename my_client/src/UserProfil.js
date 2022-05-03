import React from 'react'
import './UserProfil.css'
import defaultUserPic from './defaultUserPic.png'


class UserProfil extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          prenom : this.props.prenom,
          nom : this.props.nom,
          username : this.props.username,
          email : this.props.email,
          profilPic : this.props.profilPic,
          description : this.props.description,
          friends : this.props.friendList,
          posts : this.props.posts
        }
    }

    render(){
        if(this.state.profilPic){
            var profileImage = this.state.profilPic;
        }
        else{
            var profileImage = defaultUserPic;
        }

        return (
            <div className='userprofil'>
                <header className='headerpage'>
                    <figure>

                    </figure>
                </header>
                <img id='profilimage' src={this.state.profilPic} alt='profilimage'/>
                <div className='infos'>
                    <p>Username : {this.state.username}</p>
                    <p>Prénom : {this.state.firstname}</p>
                    <p>Nom : {this.state.lastname}</p>
                    <p>Email : {this.state.email}</p>
                    <div className='description'>
                        {this.state.description}
                    </div>
                </div>
                <div className='myposts'>
                    <h1>MyPosts</h1>
                    {this.state.posts}
                </div>
            </div>
          )
    }

}

export default UserProfil
