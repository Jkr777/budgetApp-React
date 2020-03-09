import { SET_FLOW, GET_FLOW_CONTENT, SET_ASSETS, SET_EARNINGS, SET_LIABILITIES, SET_SPENDINGS, REMOVE_ASSETS, REMOVE_LIABILITIES } from '../action_types';

const defaultState = {
  assets: null,
  liabilities: null,
  earnings: null,
  spendings: null
}

const flowReducer = (state=defaultState, action) => {
  switch (action.type) {
    case SET_FLOW:
      return {
        ...action.flow
      };  
    case GET_FLOW_CONTENT:
      return {
        ...state,
        ...action.data.cash_flow
      };
    case SET_ASSETS: 
    case SET_EARNINGS: 
      return {
        ...state,
        total: state.total + action.data.amount,
        [action.endPoint_total]: state[action.endPoint_total] + action.data.amount,
        [action.endPoint]: [...state[action.endPoint], action.data]
      };
    case SET_LIABILITIES:
    case SET_SPENDINGS:
      return {
        ...state,
        total: state.total - action.data.amount,
        [action.endPoint_total]: state[action.endPoint_total] + action.data.amount,
        [action.endPoint]: [...state[action.endPoint], action.data]
      }
    case REMOVE_ASSETS:
      return {
        ...state,
        total: state.total - action.amount,
        assets_total: state.assets_total - action.amount,
        assets: state.assets.filter(v => v._id !== action.id)
      }
    case REMOVE_LIABILITIES:
      return {
        ...state,
        total: state.total + action.amount,
        liabilities_total: state.liabilities_total - action.amount,
        liabilities: state.liabilities.filter(v => v._id !== action.id)
      }
    default:
      return state;
  }
};


export default flowReducer;