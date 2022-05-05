import { GET_ALL_MSG } from "../actions/allmsg_actions";

const initialState = {};

export default function allMsgReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MSG:
      return action.payload
    default: 
      return state;
  }
}