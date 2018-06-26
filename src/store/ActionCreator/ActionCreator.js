import axios from 'axios';

export const showProfile = (res) => {
    return {
        type: 'SHOW_PROFILE',
        data: res
    }
}

export const doRequest = (res) => {
    return dispatch => {
        dispatch({type: 'SHOW_LOADING'});
        axios.get(`https://reqres.in/api/users/${res.id}`)
        .then(res => {
            console.log(res);
            dispatch(showProfile(res.data.data));
        })
        .catch(err =>  {
            console.log(err);
        });
    }
}
