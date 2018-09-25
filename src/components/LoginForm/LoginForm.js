import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/LoginActions';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import './LoginForm.css';

import logo from '../../Images/logo.png';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.pushToSignUP = this.pushToSignUP.bind(this);
    this.params = {
      email: "",
      password: "",
      redirect: false
    }
  }

  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </head>
        <body class="text-center">
          <form class="form-signin">
              <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt width="72" height="72"/>
              <h1 class="h3 mb-4 font-weight-normal">Please Sign In</h1>
              <div class="form-group">
              <label for="inputEmail" class="paddingZero">Email Address</label>
              <input type="email" id="inputEmail" class="form-control"
               onChange={(e) => {this.params.email = e.target.value}} required autoFocus/>
              </div>
              <div class="form-group">
              <label for="password" class="paddingZero">Password</label>
              <input type="password" id="password" class="form-control" 
               onChange={(e) => {this.params.password = e.target.value}}></input>
              </div>
              <button class="btn btn-lg btn-primary btn-block margintop" onClick={()=>{this.pushToSignUP()}}>Sign In</button>
              <input type="button" class="margintop"
              onClick={(e) => {this.pushToSignUP()}} value="Don't Have an account? Sign Up Here"></input>
              <input type="button" value="Forgot Password?" class="ForgotPassword" onClick={() => {this.props.history.push('/forgotpassword')}}/>
          </form>
       </body>
      </html>
    )
  }
  pushToSignUP() {
    this.props.history.push('/signup');
  }
  getAlertComponent = () => {
    let {isLoginPending, isLoginSuccess, isLoginError} = this.props;
    if (isLoginPending===true) {
      return <div>Please Wait...</div>
    }
    if (isLoginSuccess) {
      return <div>Success...</div>
    }
    if (isLoginError) {
      return <div>Error</div>
    }
  }
  onSubmit() {

    let { email, password } = this.params;
    if (email && password) {
      this.props.history.push('/signup');
    } else {
      window.alert('Please Fill All Details');
    }
  }
}

const mapStateToProps = (state) => {

  let {loginReducer}  = state;
  return {
    isLoginPending: loginReducer.isLoginPending,
    isLoginSuccess: loginReducer.isLoginSuccess,
    isLoginError: loginReducer.isLoginError,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
