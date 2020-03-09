import { TOGGLE_NAVIGATION, TOGGLE_CASH_FLOW, RESET_LINK, RESET_PASSWORD } from '../action_types';

const defaultState = {
  navClick: false,
  cashFlowClick: '',
  resetLinkMessage: '',
  resetPassMessage: ''
};

const interactionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        navClick: !state.navClick
      };
    case TOGGLE_CASH_FLOW:
      return {
        ...state,
        cashFlowClick: action.name === state.cashFlowClick ? '' : action.name
      };
    case RESET_LINK: 
      return {
        ...state,
        resetLinkMessage: action.mess
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassMessage: action.mess
      };
    default:
      return state; 
  }
};

export default interactionReducer;