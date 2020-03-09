import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user';
import flowReducer from '../reducers/flow';
import historyReducer from '../reducers/history';
import userInteractionReducer from '../reducers/userInteraction';
import errorReducer from '../reducers/error';

export default () => {
  const store = createStore(combineReducers({
    user: userReducer,
    cash_flow: flowReducer,
    history: historyReducer, 
    userInteraction: userInteractionReducer,
    error: errorReducer
  }), composeWithDevTools(applyMiddleware(thunk)));
  return store;
};