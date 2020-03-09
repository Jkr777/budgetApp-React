import { SET_HISTORY } from '../action_types';

const historyReducer = (state=[], action) => {
  switch(action.type) {
    case SET_HISTORY:
      return [
        ...action.data
      ]
    default:
      return state;
  }
};

export default historyReducer;