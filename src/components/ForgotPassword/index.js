import React, {Component} from 'react';
import './forgorpassword.css';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.params = {
            email: ""
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
                   <form class="form-forgotpassword">
                        <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt width="72" height="72"/>
                        <h1 class="h3 mb-4 font-weight-normal">Please Enter Your Email</h1>
                        <div class="form-group">
                        <label for="forgotpassword" class="leftPaddingZero">Email</label>
                        <input type="email" id="forgotpassword" class="form-control" required 
                        onChange={(e) => {this.params.email = e.target.value}}
                        />
                        </div>
                        <button class="btn btn-block btn-lg btn-primary marginTop" onClick={() => {

                        }}>Send OTP</button>
                   </form>
            </body>
        </html>
        )
    }
}