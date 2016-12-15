import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });

                // - Save the JWT token to localstore
                const {token} = response.data;
                localStorage.setItem('token', token);

                // - redirect to the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError('Bad Signin Info'));
            });
    };
};

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export function signOutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER,
        payload: null
    };
}