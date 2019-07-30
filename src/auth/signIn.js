import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import {connect} from 'react-redux'
import signIn from '../store/actions/authSignInAction'
import "./signIn.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      [e.target.id]: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);

  }

  render() {
    const { authError } = this.props;
    return (
      <div className="signIn">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <div>
            { authError ? <p> {authError}</p>: null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)