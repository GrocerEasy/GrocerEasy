import {
  SET_ITEM_REQUEST,
  SET_ITEM_SUCCESS,
  SET_ITEM_FAIL,
  SET_ITEM_TEST
} from '../actions/types';

const initialState = {
  cart: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Depending on type, what do we want to return to state
    //* ___________TEST____________
    case SET_ITEM_TEST:
      return { loading: false, msg: payload };
    //* ___________TEST____________
    case SET_ITEM_REQUEST:
      // Setting a loading key
      return { loading: true, cart: [] };
    case SET_ITEM_SUCCESS:
      return { loading: false, cart: payload };
    case SET_ITEM_FAIL:
      // Now setting an error in the state
      return { loading: false, error: payload };
    default:
      return state;
  }
}
