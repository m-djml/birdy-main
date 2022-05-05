import {
    GET_ONE_USER_MSG,
    LIKE_MSG,
    UNLIKE_MSG,
    DELETE_MSG
} from "../actions/message_actions";

const initialState = {};

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ONE_USER_MSG :
            return action.payload;
        case LIKE_MSG :
            return state.map((msg) => {
                if (msg._id === action.payload.msg_id) {
                  return {
                    ...msg,
                    likers: [action.payload.userId, ...msg.likers],
                  };
                }
                return msg;
            });
        case LIKE_MSG :
            return state.map((msg) => {
                if (msg._id === action.payload.msg_id) {
                  return {
                    ...msg,
                    likers: [action.payload.userId, ...msg.likers],
                  };
                }
                return msg;
            });
        case LIKE_MSG :
                return state.map((msg) => {
                    if (msg._id === action.payload.msg_id) {
                    return {
                        ...msg,
                        likers: [action.payload.userId, ...msg.likers],
                    };
                    }
                    return msg;
                });
        case UNLIKE_MSG :
                return state.map((msg) => {
                    if (msg._id === action.payload.msg_id) {
                    return {
                        ...msg,
                        likers: msg.likers.filter((id) => id !== action.payload.userId)
                    };
                    }
                    return msg;
                });
        case DELETE_MSG:
            return state.filter((msg) => msg._id !== action.payload.msg_id);

        default:
            return state;
    }
}
