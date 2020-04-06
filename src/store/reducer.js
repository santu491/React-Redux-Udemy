
import * as actionTypes from './actions'
let initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {

    // if (action.type = "INCREMENT") {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }
    // if (action.type = "DECREMENT") {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type = "ADD") {
    //     return {
    //         ...state,
    //         counter: state.counter + action.value
    //     }
    // }
    // if (action.type = "SUBSTRACT") {
    //     return {
    //         ...state,
    //         counter: state.counter - action.value
    //     }
    // }

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:

            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.DELETE_RESULTS:
            //let updatedState=state.results.filter((data)=>data.id!==action.id)
            return {
                ...state,
                results: state.results.filter((data)=>data.id!==action.id)
            }
            
        default:
            return state

    }



}

export default reducer
