import axios from "axios";

export const GET_ALL_MSG = "GET_ALL_MSG";
export const GET_ONE_USER_MSG = "GET_ONE_USER_MSG"
export const CREATE_MSG = "CREATE_MSG";
export const LIKE_MSG = "LIKE_MSG";
export const UNLIKE_MSG = "UNLIKE_MSG";
export const DELETE_MSG = "DELETE_MSG";

export const getAllMessages = () => {
  return (dispatch) => {
      return axios
        .get("http://localhost:8080/api/message/")
        .then((res) => {
          dispatch({ type: GET_ALL_MSG, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
};

export const getOneUserMessages = (userId) => {
    return (dispatch) => {
        return axios
          .get(`http://localhost:8080/api/message/${userId}`)
          .then((res) => {
            dispatch({ type: GET_ONE_USER_MSG, payload: res.data });
          })
          .catch((err) => console.log(err));
      };
};

export const createMessage = (data) => {
    return (dispatch) => {
      return axios
        .post("http://localhost:8080/api/message/", data)
        .then((res) => {
          dispatch({ type: CREATE_MSG, payload: res.data });
        }).catch((err) => {
          console.log(err)
        })
    }
};

export const likeMsg = (msg_id, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:8080/api/message/like/${msg_id}`,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: LIKE_MSG, payload: { msg_id, userId } });
          return res;
        })
        .catch((err) => console.log(err));
    };
};

export const unlikeMsg = (msg_id, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:8080/api/message/unlike/${msg_id}`,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: UNLIKE_MSG, payload: { msg_id, userId } });
          return res;
        })
        .catch((err) => console.log(err));
    };
};

export const deleteMsg = (msg_id) => {
    return (dispatch) => {
      return axios({
        method: "delete",
        url: `http://localhost:8080/api/message/${msg_id}`,
      })
        .then((res) => {
          dispatch({ type: DELETE_MSG, payload: { msg_id } });
        })
        .catch((err) => console.log(err));
    };
};