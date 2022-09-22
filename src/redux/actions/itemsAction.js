import axios from 'axios';

import {
  SET_ITEM_REQUEST,
  SET_ITEM_SUCCESS,
  SET_ITEM_FAIL,
  SET_ITEM_TEST
} from '../types/types';

// Using redux-thunk with the async. Dispatch is how we dispatch/initiate actions
// We can now fire this off where ever we want to display the cart
export const listProducts = () => async (dispatch) => {
  try {
    // Dispatch the request -> We're now calling the reducer SET_ITEM_REQUEST -> Set loading: true, and cart: []
    dispatch({ type: SET_ITEM_REQUEST });

    const { data } = await axios.get('/api/test');
    // console.log(data);

    // Dispatch reducer success
    dispatch({
      type: SET_ITEM_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SET_ITEM_FAIL,
      /** Error Notes
       * error.response is a generic message
       * error.response.data.message should give us the backend error response
       * error.message is a generic message
       */
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
