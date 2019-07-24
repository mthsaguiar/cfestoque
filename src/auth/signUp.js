import React, { Component } from 'react';
import './signUp.css';

class SignUp extends Component{

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',
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
            <div id="container-signup">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="title-signup">Registro</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="firstName" id="firstName" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="lastName" id="lastName" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <button className="button-signup">Register</button>
                        </div>
                </form>
            </div>
        );

    }
}

export default SignUp