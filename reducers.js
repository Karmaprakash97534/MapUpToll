// reducers.js
import {
    FETCH_TOLL_DATA_REQUEST,
    FETCH_TOLL_DATA_SUCCESS,
    FETCH_TOLL_DATA_FAILURE,
  } from './actions';
  
  const initialState = {
    tollData: null,
    loading: false,
    error: null,
  };
  
  const tollReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TOLL_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TOLL_DATA_SUCCESS:
        return {
          ...state,
          tollData: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_TOLL_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tollReducer;
  