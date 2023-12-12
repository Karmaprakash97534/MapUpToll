// store.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import tollReducer from './reducers';

const store = createStore(tollReducer, applyMiddleware(thunkMiddleware));

export default store;
