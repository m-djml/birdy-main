import React from 'react'
import Message from './Message';

class MessagesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {messages : this.props.listmsg}
    }

    render(){
        return (<div class="messageslist">
            {this.state.messages.map((msg)=>{
             return <Message profil = {msg.profil} contenu = {msg.contenu} date = {msg.date}/>;
    })}
        </div>
            
            

        );
    }
}

export default MessagesList