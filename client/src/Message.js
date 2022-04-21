import React from 'react'
import './Message.css'

class Message extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className='message'>
            <div className='msgheader'>{this.props.profil}</div>
            <div className='msgbody'>
                <blockquote className='blockquote'>{this.props.contenu}</blockquote>
            </div>
            <footer className='msgfooter'>{this.props.date}</footer>
        </div>
        )
    }
}
export default Message