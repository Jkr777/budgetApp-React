import { SET_USER } from '../action_types';

const defaultState = {
  username: '',
  auth: false
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER: 
      return {
        username: action.username,
        auth: action.username.length > 0
      }
    default:
      return state;
  }
};

export default userReducer;