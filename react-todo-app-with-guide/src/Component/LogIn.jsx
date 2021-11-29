import React, { Component } from 'react'

class LogInForm extends Component {

    constructor(props) {
        super(props)
        this.state = {userName: ''};
    }
    
    handleChange = event =>
    {
        this.setState(
            {
                userName: event.target.value
            }
        );
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="userName">userName</label>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                </form>
                <h3>Your userName is : {this.state.userName}</h3>
            </>
        )
    }
}

export default LogInForm;
