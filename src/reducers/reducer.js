const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'CLEAR_CURRENCY':
            return state = 0;
        case 'GET_CURRENCY' :
            return state = 27;
        default: 
            return state;
    }
}

export default reducer;