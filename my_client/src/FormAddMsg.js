import React from 'react'
import './FormAddMsg.css';
import Avatar from '@mui/material/Avatar';

class FormAddMsg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message : "",
        };
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
    }

    handleChangeMsg(e){
        this.setState({message:e.target.value});
    }

    sendMessage(e){
        var data_to_send = {
            msg : this.refs.msg
        };
        this.props.addMessage(data_to_send);
    }

    render(){
        return (<div className="formaddmsg">
            <div className='form_avatar'>
                <Avatar alt="pic" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
            </div>
            <form action="http://localhost:8080/addMsg" method="POST">
                <input className="messageinput" type="textarea" placeholder="Votre message" onChange={this.handleChangeMsg} value={this.state.message} ref='msg'/>
                <button className="poster" onSubmit={((event) => this.sendMessage(event))}>Poster</button>
            </form>

        </div>

        );
    }
}

export default FormAddMsg