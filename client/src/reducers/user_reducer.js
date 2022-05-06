import { GET_USER, UPDATE_BIO, FOLLOW, UNFOLLOW } from "../actions/user_actions";

const initialState = {};

export default function userReducer(state = initialState, action){

    switch (action.type){
        case GET_USER:
            return action.payload
        case UPDATE_BIO:
            return {
                ...state,
                bio: action.payload,
              };
        case FOLLOW:
            return {
                ...state,
                following: [action.payload.idToFollow, ...state.following]
            }
        
        case UNFOLLOW:
            return {
              ...state,
              following: state.following.filter((id) => id !== action.payload.idToUnfollow),
            };
        
        default:
            return state;
    }

}