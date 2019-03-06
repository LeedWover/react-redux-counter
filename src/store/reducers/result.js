import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: Math.random(), value: action.result})
            }
        case actionTypes.DELETE_RESULT: 
            const newArray = [...state.results];
            newArray.map((result, index) =>{  
                if(result.id === action.resultElId) {
                    newArray.splice(index, 1)
                }
            });
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