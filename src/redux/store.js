// Might need to use redux-thunk as well, but we're going to keep the code dry for now
import { createStore } from 'redux'

import rootReducer from './reducers'

// All of our initial state will be in the reducers
const initialState = {};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;