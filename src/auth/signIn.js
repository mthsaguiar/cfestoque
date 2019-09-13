import React, { Component } from "react";
import {connect} from 'react-redux'
import signIn from '../store/actions/authSignInAction'
import "./signIn.css";
import { Redirect } from 'react-router-dom'
class SignIn extends Component {
 
    state = {
      email: "",
      password: ""
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
    handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.history.push('/')
  }

  render() {
    const { authError, auth} = this.props;
    if(auth.uid) return <Redirect to='/'/>
    return (
      <div className="signIn">
          <form>
            <p>E-mail</p>
              <input 
              type="text" 
              name="email" 
              placeholder="Insira seu e-mail" 
              value={this.state.email}
              onChange={this.handleChange}/>
            <p>Password</p>
              <input 
              type="password" 
              name="password" 
              placeholder="Insira sua senha"
              value={this.state.password}
              onChange={this.handleChange}/>
              <input 
              type="submit" 
              name="" 
              value="Login"
              disabled={!this.validateForm()}/>
              <div>
                { authError ? <p>{authError}</p>: null}
              </div>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)