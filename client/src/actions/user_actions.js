import axios from 'axios';

export const GET_USER = "GET_USER";
export const UPDATE_BIO = "UPDATE_BIO";


export const getUser = (userId) => {
    //dispatch = ce qu'on va envoyer au reducer pour envoyer ça au store
    return (dispatch) => {
        return axios.get(`http://localhost:8080/api/user/${userId}`)
                    .then((res) => {
                        dispatch({ type: GET_USER, payload : res.data });
                    })
                    .catch((err) => console.log(err));
    }
}

export const updateBio = (userId, bio) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `http://localhost:8080/api/user/${userId}`,
        data: { bio : bio },
      })
        .then((res) => {
          dispatch({ type: UPDATE_BIO, payload: bio });
        })
        .catch((err) => console.log(err));
    };
};