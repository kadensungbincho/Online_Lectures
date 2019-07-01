import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReducers';

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});