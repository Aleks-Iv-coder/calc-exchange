// import {routerReducer} from 'react-router-redux';
import {GET_CURRENCY_REQUEST, GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE, CLEAR_CURRENCY} from './actions';

export const initialState = {};

// export const routerReduserRedax = {
//     routing: routerReducer,
// };

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_CURRENCY:
            return initialState ;
        case GET_CURRENCY_REQUEST :
            return {
                ...state,
                loading: true,
            };
        case GET_CURRENCY_SUCCESS :
            return {
                currency: action.payload,
                loading: false,
            };
        case GET_CURRENCY_FAILURE :
                return {
                    loading: false,
                };
        default: 
            return state;
    };
};