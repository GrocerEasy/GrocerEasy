import { SET_ITEM_INCREMENT, SET_ITEM_DECREMENT, SET_ITEM_QUANTITY } from '../actions/types'

const initialState = {
  itemQuantity: 0,
  cart: []
}

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    // Depending on type, what do we want to return to state
    case SET_ITEM_INCREMENT:
      return {...state, itemQuantity: state.itemQuantity + 1}
    case SET_ITEM_DECREMENT:
      return {...state, itemQuantity: state.itemQuantity - 1}
    case SET_ITEM_QUANTITY:
      return {...state, itemQuantity: payload}
    default:
      return state;
  }
}