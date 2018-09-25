import React, {Component} from 'react';
import {signUpAction} from '../../actions/SignUpActions';
import {connect} from 'react-redux';
import './signUp.css';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.params = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = () => {
        
        const {firstName, lastName,email, password, confirmPassword} = this.params;
        if (firstName && lastName && email && password && confirmPassword) {
              if (password === confirmPassword) {
                this.props.register(this.params);
              } else {
                  window.alert('Password and Confirm Password Should be same');
              }
        } else {
            window.alert('Please Fill All Details');
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
                       <form class="form-signUp">
                          <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt width="72" height="72"/>
                          <h1 class="h3 mb-4 font-weight-normal">Please Sign Up</h1>
                         <div class="form-group">
                          <label for="firstName" class="marginLeft">First Name</label>
                          <input id="firstName" type="text" class="form-control" required autoFocus
                          onChange={(e) => {this.params.firstName = e.target.value}}/>
                          </div>
                          <div class="form-group">
                          <label for="lastName" class="marginLeft">Last Name</label>
                          <input type="text" id="lastName" class="form-control"  required 
                          onChange={(e) => {this.params.lastName = e.target.value}}/>
                          </div>
                          <div class="form-group">
                          <label for="email" class="marginLeft">Email</label>
                          <input type="email" id="email" class="form-control" required  required
                          onChange={(e) => {this.params.email = e.target.value}}/>
                          </div>
                          <div class="form-group">
                          <label for="password" class="marginLeft">Password</label>
                          <input id="password" type="password" class="form-control" required
                          onChange = {(e) => {this.params.password = e.target.value}}/>
                          </div>
                          <div class="form-group">
                          <label for="retypePassword" class="marginLeft">ReType Password</label>
                          <input id="retypePassword" type="password" class="form-control mt-0" name="retypePassword" required
                          onChange={(e) => {this.params.confirmPassword = e.target.value}}/>
                          </div>
                          <button class="btn btn-lg btn-primary btn-block mt-4" onClick={this.onSubmit}>Sign Up</button>
                          <input class="marginTop" type="button" onChange={(e) => {this.props.history.goBack()}} value="Click here to Login"/>
                       </form>
                    </body>
            </html>
        )
    }
    
}
const mapStateToProps = (state) => {

    const {SignUpReducer} = state;
    return {
        isSignUpError: SignUpReducer.isSignUpError,
        isSignUpSuccess: SignUpReducer.isSignUpSuccess,
        isSignUpLoading: SignUpReducer.isSignUpLoading
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        register: (params) => dispatch(signUpAction(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
