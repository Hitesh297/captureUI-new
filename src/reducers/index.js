import {combineReducers} from 'redux';
import AuthorizationReducer from './reducer_authorization';
import PostsReducer from './PostReducer';


const rootReducer = combineReducers(
  {

    isAuthorized : AuthorizationReducer,
    posts : PostsReducer
  }
);

export default rootReducer;
