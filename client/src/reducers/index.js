import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import allUsersReducer from './allusers_reducer';
import messageReducer from './message_reducer';
import allMsgReducer from './allMsg_reducer'


const rootReducer = combineReducers({
    userReducer, allUsersReducer, messageReducer, allMsgReducer,
});

export default rootReducer;