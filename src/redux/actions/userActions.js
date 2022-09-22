import axios from 'axios';

import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST
} from '../types/userTypes';

export const register = (username, email, password) => async (dispatch) => {
  try {
    // Initializes the loading key/value pair in the state store
    dispatch({
      type: USER_REGISTER_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post(
      '/auth/register',
      {
        username,
        email,
        password
      },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        err.response && err.response.data.err
          ? err.response.data.err
          : err.message
    });
  }
};

export const login = (username, password, email) => async (dispatch) => {
  try {
    dispatch({
      // Calling our reducer and populating the store with loading: true
      type: USER_LOGIN_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post(
      '/auth/login',
      { username, password, email },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.err
          ? err.response.data.err
          : err.message
    });
  }
};
