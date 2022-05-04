import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import allUsersReducer from './allusers_reducer';

export default combineReducers({
    userReducer, allUsersReducer
})