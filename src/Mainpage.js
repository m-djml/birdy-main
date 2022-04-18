import React from 'react'

class Mainpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isConnected : false,
            currentpage : "connexion",
            currentUser : ''
        };
        this.setLogout = this.setLogout.bind(this);
        this.getConnected = this.getConnected.bind(this);
    }
    setLogout(){ 
        this.setState({isConnected : false});
        changeCurrentPage();
    }

    getConnected(){
        this.setState({isConnected : true});
        changeCurrentPage();
    }

    changeCurrentPage(){

    }

    render (){
        return (<div>

        </div>);
    }
}

export default Mainpage