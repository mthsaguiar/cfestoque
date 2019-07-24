import React, { Component } from 'react';
import './signIn.css';

class SignIn extends Component{

    state={
        email:'',
        password:''
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div id="container-signin">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="title-signin">Login</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <button className="button-signin">Login</button>
                        </div>
                </form>
            </div>
        );

    }
}

export default SignIn