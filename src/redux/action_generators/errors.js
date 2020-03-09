import { ADD_ERROR, REMOVE_ERROR } from '../action_types';

export const addError = mess => ({
  type: ADD_ERROR,
  mess
});

export const removeError = () => ({
  type: REMOVE_ERROR
});