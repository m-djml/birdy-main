import axios from 'axios';

export const GET_USER = "GET_USER";

export const getUser = (userId) => {
    //dispatch = ce qu'on va envoyer au reducer = envoyer ça au store
    return (dispatch) => {
        return axios.get(`http://localhost:8080/api/user/${userId}`)
                    .then((res) => {
                        dispatch({ type: GET_USER, payload : res.data });
                    })
                    .catch((err) => console.log(err));
    }
}