
import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm';
import ForgotPassword from './components/ForgotPassword';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
          <Route exact path="/" component={LoginForm}/>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/forgotpassword" component={ForgotPassword}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
