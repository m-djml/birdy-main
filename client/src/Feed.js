import React from 'react'
import FormAddMsg from './FormAddMsg'
import MessagesList from './MessagesList'
import './Feed.css';
import Message from './Message';

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(data){
        this.setState( (state) =>{
            state.listmsg = state.listmsg.concat({message : data.message});
            return state;
        }
            );
    }
    render(){
        return (
            
            <div className='feed'>
                <div className='headerfeed'>
                    <h2 className="titlefeed">Home</h2>
                </div>
                <div className='form_message'>
                    <FormAddMsg userId ={this.props.userId} addMessage={this.addMessage}/>
                </div>
                {/* Posts*/}
                <div className='messages_feed'>
                    <MessagesList />
                {/* <MessagesList listmsg={this.state.listmsg}/> */}
                </div>
            </div>
        )
    }
}

export default Feed