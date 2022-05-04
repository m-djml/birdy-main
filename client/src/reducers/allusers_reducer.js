import { GET_ALL_USERS } from '../actions/allusers_actions'

const initialState = {};

export default function allUsersReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_USERS:
        return action.payload;
      default:
        return state;
    }
}