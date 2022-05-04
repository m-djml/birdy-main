import axios from 'axios';

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = () => {
    return (dispatch) => {
      return axios
        .get("http://localhost:8080/api/user/")
        .then((res) => {
          dispatch({ type: GET_ALL_USERS, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
};