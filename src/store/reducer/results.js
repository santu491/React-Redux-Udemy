
import * as actionTypes from './../actions'
let initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {


    switch (action.type) {

        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.payload})
            }
        case actionTypes.DELETE_RESULTS:
            return {
                ...state,
                results: state.results.filter((data)=>data.id!==action.id)
            }
            
        default:
            return state

    }



}

export default resultReducer
