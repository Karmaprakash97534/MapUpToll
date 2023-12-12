// actions.js
export const FETCH_TOLL_DATA_REQUEST = 'FETCH_TOLL_DATA_REQUEST';
export const FETCH_TOLL_DATA_SUCCESS = 'FETCH_TOLL_DATA_SUCCESS';
export const FETCH_TOLL_DATA_FAILURE = 'FETCH_TOLL_DATA_FAILURE';

export const fetchTollDataRequest = () => ({
  type: FETCH_TOLL_DATA_REQUEST,
});

export const fetchTollDataSuccess = (data) => ({
  type: FETCH_TOLL_DATA_SUCCESS,
  payload: data,
});

export const fetchTollDataFailure = (error) => ({
  type: FETCH_TOLL_DATA_FAILURE,
  payload: error,
});
