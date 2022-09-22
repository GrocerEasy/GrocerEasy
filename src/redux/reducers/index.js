import { combineReducers } from 'redux';
import { itemListReducer } from './itemReducer';
import { userRegisterReducer, userLoginReducer } from './userReducer';

export default combineReducers({
  // cartList is what's going to be shown in the state (Redux dev tools)
  cartList: itemListReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer
});
