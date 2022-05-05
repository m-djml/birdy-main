import axios from 'axios';
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

export const GET_ALL_MSG = "GET_ALL_MSG";

export const getAllMessages = () => {
    return (dispatch) => {
        return axios
          .get("http://localhost:8080/api/message/") //, {cancelToken: source.token})
          .then((res) => {
            dispatch({ type: GET_ALL_MSG, payload: res.data });
          })
          .catch((err) => console.log(err));
      };
};