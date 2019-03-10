import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: Math.floor(Math.random() * 100), value: action.result})
            }
        case actionTypes.DELETE_RESULT: 
            const newArray = [...state.results];
            newArray.splice(action.resultIndex, 1)
            //const newArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: newArray
            }
        default: 
            return state;
    }
};

export default reducer;