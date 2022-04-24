import React from 'react'

class Mainpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isConnected : false,
            currentUser : ''
        };
        this.setLogout = this.setLogout.bind(this);
        this.getConnected = this.getConnected.bind(this);
    }

    setLogout(){ 
        this.setState({
            isConnected : false
        });
    }

    getConnected(){
        this.setState({
            isConnected : true
        });
    }


    render (){
        return (<div>

        </div>);
    }
}

export default Mainpage