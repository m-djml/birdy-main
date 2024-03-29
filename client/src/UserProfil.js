import React, { useState } from 'react'
import './UserProfil.css'
import defaultUserPic from './defaultUserPic.png'
import { useSelector, useDispatch } from 'react-redux';
import { updateBio } from "./actions/user_actions";
import Message from './Message';

function UserProfil (){

    const messages = useSelector((state) => state.allMsgReducer);
    const userData = useSelector((state) => state.userReducer)
    const [bio, setBio] = useState('');
    const [updateFormBio, setUpdateFormBio] = useState(false);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        console.log("je passe ici");
        dispatch(updateBio(userData._id, bio));
        setUpdateFormBio(false);
    };
    // render(){
    //     if(this.state.profilPic){
    //         var profileImage = this.state.profilPic;
    //     }
    //     else{
    //         var profileImage = defaultUserPic;
    //     }

        return (
            <div className='userprofil'>
                <header className='headerpage'>
                    <figure>

                    </figure>
                </header>
                <img id='profilimage' src={defaultUserPic} alt='profilimage'/>
                <div className='infos'>
                    <p>Username : {userData.username}</p>
                    <p>Prénom : {userData.firstname}</p>
                    <p>Nom : {userData.lastname}</p>
                    <p>Email : {userData.email}</p>
                    <div className='description'>
                        <h3>Bio</h3>
                        {updateFormBio === false && (
                        <>
                            <p onClick={() => setUpdateFormBio(!updateFormBio)}>{userData.bio}</p>
                            <button onClick={() => setUpdateFormBio(!updateFormBio)}>
                            Modifier bio
                            </button>
                        </>
                        )}
                        {updateFormBio && (
                        <>
                            <textarea
                            type="text"
                            defaultValue={userData.bio}
                            onChange={(e) => setBio(e.target.value)}
                            ></textarea>
                            <button onClick={handleUpdate}>Valider modifications</button>
                        </>
                        )}
                    </div>
                </div>
                <div className='myposts'>
                    <h1>MyPosts</h1>
                    {/* Liste des messages */}
                    {/* <p>msg : {messages ? console.log(messages) : ""}</p> */}

                    <div className="messageslist">
                        {messages.map((msg) => {
                            if(msg.author_id === userData._id)
                                return <Message id={msg._id} author={msg.author} contenu={msg.message} likes={msg.likers.length} date = {msg.createdAt}/>;
                        })}
                    </div>      
                </div>
            </div>
          )
}



export default UserProfil