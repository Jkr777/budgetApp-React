import { axiosInstance, setTokenHeader } from '../../services/axios';
import { addError, removeError } from './errors';
import { setFlow } from './flow';
import { SET_USER } from '../action_types';

export const setUser = username => ({
  type: SET_USER,
  username
});

export const setAuthorizationToken = token => {
  setTokenHeader(token);
};

export const logOut = () => {
  return dispatch => {
    localStorage.removeItem("auth-token");
    dispatch(setUser(''));
    dispatch(setFlow(''));
  }
};

export const auth = (url, data) => {
  return (dispatch, getState) => {
    const { error } = getState();
    return new Promise((resolve, reject) => {
      axiosInstance.post(`/${url}`, data)
      .then(res => {
        localStorage.setItem("auth-token", res.headers["x-auth"]);
        setAuthorizationToken(res.headers["x-auth"]);
        dispatch(setUser(res.data.username));
        dispatch(setFlow(res.data.cash_flow));
        if(error.message) {
          dispatch(removeError())
        };
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.response.data));
        reject();
      });
    })
  }
};

export const getProfile = () => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.get('/profile')
      .then(res => {
        dispatch(setUser(res.data.username));
        dispatch(setFlow(res.data.cash_flow));
        if(error.message) {
          dispatch(removeError())
        };
      })
      .catch(() => dispatch(logOut()));
  }
};

export const editProfile = data => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.patch('/profile', data)
      .then(res => {
        dispatch(setUser(res.data.username));
        if(error.message) {
          dispatch(removeError())
        };
      })
      .catch(err => dispatch(addError(err.response.data)));
  }
}; 

export const deleteAccount = () => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.delete('/profile')
    .then(() => {
      if(error.message) {
        dispatch(removeError());
      };
      dispatch(logOut());
    })
    .catch(err => dispatch(addError(err.response.data)));
   }
}