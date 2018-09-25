import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginReducer from '../reducers/LoginReducer';
import SignUpReducer from '../reducers/SignUpReducers';

const reducer = combineReducers({loginReducer, SignUpReducer});

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default store;
