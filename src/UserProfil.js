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
                <img id='profilimage' src={profileImage} alt='profilimage'/>
                <div className='infos'>
                    <p>Username : Coco2</p>
                    <p>Prénom : Coco</p>
                    <p>Nom : Rien</p>
                    <p>Email : coco@gmail.com</p>
                    <div className='description'>
                        Bonjour bla bla bla bla bla bla bla 
                        bla bla blabla 
                        blablablabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    </div>
                </div>
                <div className='myposts'>
                    <h1>MyPosts</h1>
                    {/* Liste des messages */}
                </div>
            </div>
          )
    }

}

export default UserProfil