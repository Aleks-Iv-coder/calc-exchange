export const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_FAILURE = 'GET_CURRENCY_FAILURE';
export const CLEAR_CURRENCY = 'CLEAR_CURRENCY';

export const clearCurrency = () => ({type: CLEAR_CURRENCY});
export const getCurrencyRequest = () => ({ type: GET_CURRENCY_REQUEST });
export const getCurrencySuccess = (currency) => ({ type: GET_CURRENCY_SUCCESS, payload: currency});
export const getCurrencyFailure = () => ({ type: GET_CURRENCY_FAILURE});