import { axiosInstance } from '../../services/axios';
import { addError, removeError } from './errors';
import { SET_HISTORY } from '../action_types';

export const setHistory = data => ({
  type: SET_HISTORY,
  data
});

export const getHistory = () => (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.get('/history')
      .then(res => {
        dispatch(setHistory(res.data))
        if(error.message) {
          dispatch(removeError());
        };
      })
      .catch(err => dispatch(addError(err.response.data)));
};