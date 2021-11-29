import React,{Component} from 'react';

class Message extends Component {


    constructor() {
        super()
        // Since we extend the class Component and making
        // a call to the base class
        this.state = {
            sandes: 'Welcome vistor'
        }
    }

    changeMessage(){
        this.setState({sandes: 'Thankyou for subscribing'})
    }

    render(){
        return (
            <>
            <h1>
                {this.state.sandes}
            </h1>
            <button onClick={()=> this.changeMessage()}>Subscibe</button>
            </>
        )
    }

}
export default Message;

