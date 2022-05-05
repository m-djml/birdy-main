import React from 'react'
import './Message.css'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

class Message extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <li className='message' key={this.props.id}>
            <div className= 'message_avatar'>
            <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
            </div>
            <div className='message_body'>
                <div className='message_header'>
                    <h3>@{this.props.author}</h3>
                </div>
                <div className='message_content'>
                    <p>{this.props.contenu}</p>
                </div>
                <FavoriteBorderIcon/>
                <h5>{this.props.likes}</h5>
            </div>
            <div className='message_footer' >
                <p>{this.props.date.split("T")[0]}</p>
                <p>à {this.props.date.split("T")[1].split(".")[0]}</p>
            </div>
        </li>
        //     <div className='msgheader'>{this.props.profil}</div>
        //     <div className='msgbody'>
        //         <blockquote className='blockquote'>{this.props.contenu}</blockquote>
        //     </div>
        //     <footer className='msgfooter'>{this.props.date}</footer>
        // </div>
        )
    }
}
export default Message