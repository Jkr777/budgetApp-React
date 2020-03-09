import { axiosInstance } from '../../services/axios';
import { SET_FLOW, GET_FLOW_CONTENT } from '../action_types';
import { addError, removeError } from './errors';
import { toggleCashFlow } from './userInteraction';

export const setFlow = flow => ({
  type: SET_FLOW,
  flow
});

const getFlowContent = data => ({
  type: GET_FLOW_CONTENT,
  data
});

const setFlowContent = (endPoint, data) => ({
  type: `SET_${endPoint.toUpperCase()}`,
  data,
  endPoint,
  endPoint_total: `${endPoint}_total`
}); 

const removeFlowContent = (endPoint, id, amount) => ({
  type: `REMOVE_${endPoint.toUpperCase()}`,
  id,
  amount
});

export const get = endPoint => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.get(`/cash_flow/${endPoint}`)
      .then(res => {
        dispatch(getFlowContent(res.data));
        dispatch(toggleCashFlow(endPoint));
        if(error.message) {
          dispatch(removeError())
        };
      })
      .catch(err => dispatch(addError(err.response.data)))
  }
}; 

export const remove = (endPoint, id, amount) => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.delete(`/cash_flow/${endPoint}/${id}`)
    .then(() => {
      dispatch(removeFlowContent(endPoint, id, amount));
      if(error.message) {
        dispatch(removeError())
      };
    })
    .catch(err => dispatch(addError(err.response.data)))
  }
}; 

export const newFlowElement = (endPoint, data) => {
  return (dispatch, getState) => {
    const { error } = getState();
    axiosInstance.post(`cash_flow/add_${endPoint}`, data)
    .then(res => {
      dispatch(setFlowContent(endPoint, res.data));
      if(error.message) {
        dispatch(removeError())
      };
    })
    .catch(err => dispatch(addError(err.response.data)))
  }
}; 