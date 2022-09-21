import { combineReducers } from 'redux';
import { itemListReducer } from './itemReducer';

export default combineReducers({
  // cartList is what's going to be shown in the state (Redux dev tools)
  cartList: itemListReducer
});
