import React from 'react'
import FormAddMsg from './FormAddMsg'
import MessagesList from './MessagesList'
import './Feed.css';

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = { listmsg : []};
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
                {/* Header */}
                <h2>Home</h2>
                {/* BirdBox */}
                <FormAddMsg addMessage={this.addMessage}/>
                {/* Posts*/}
                <MessagesList listmsg={this.state.listmsg}/>

            </div>
        )
    }
}

export default Feed