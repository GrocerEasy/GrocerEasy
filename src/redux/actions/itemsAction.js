import { SET_ITEM_QUANTITY, SET_ITEM_INCREMENT, SET_ITEM_DECREMENT } from './types'

export const increaseValue = () => {
  return {
    type: SET_ITEM_INCREMENT
  }
}

export const decreaseValue = () => {
  return {
    type: SET_ITEM_DECREMENT
  }
}

export const setItemQuantity = (quantity) => {
  return {
    type: SET_ITEM_QUANTITY,
    payload: quantity
  }
}