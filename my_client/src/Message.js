import React from 'react'
import './Message.css'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

class Message extends React.Component {

    render() {
        return (
        <div className='message'>
            <div className= 'message_avatar'>
            <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
            </div>
            <div className='message_body'>
                <div className='message_header'>
                    <h3>@username</h3>
                </div>
                <div className='message_content'>
                    <p>This is the message</p>
                </div>
            </div>
            <div className='message_footer' >
                <FavoriteBorderIcon/>
                {/* <p>Date</p> */}
            </div>
        </div>
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
