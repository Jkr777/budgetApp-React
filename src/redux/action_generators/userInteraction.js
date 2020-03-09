import { axiosInstance } from '../../services/axios';
import { TOGGLE_NAVIGATION, TOGGLE_CASH_FLOW, RESET_LINK, RESET_PASSWORD } from '../action_types';
import { addError, removeError } from './errors';

export const toggleNav = () => ({
  type: TOGGLE_NAVIGATION
});

export const toggleCashFlow = name => ({
  type: TOGGLE_CASH_FLOW,
  name,
});

export const reset = mess => ({
  type: RESET_LINK,
  mess
});

export const resetPass = mess => ({
  type: RESET_PASSWORD,
  mess
});

export const resetLink = email => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.post('/reset', { email })
    .then(res => {
      if(error.message) {
        dispatch(removeError());
      };
      dispatch(reset(res.data));
    })
    .catch(err => dispatch(addError(err.response.data)));
  }
};

export const resetPassword = (password, params) => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.patch(`/reset/${params}`, { password })
    .then(res => {
      if(error.message) {
        dispatch(removeError());
      };
      dispatch(resetPass(res.data));
    })
    .catch(err => dispatch(addError(err.response.data)));
  }
};