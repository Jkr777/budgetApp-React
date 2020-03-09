import { ADD_ERROR, REMOVE_ERROR } from '../action_types';

const errorReducer = (state={message: null}, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        message: action.mess
      };
    case REMOVE_ERROR:
      return {
        message: null
      };
    default:
      return state;
  }
};

export default errorReducer;