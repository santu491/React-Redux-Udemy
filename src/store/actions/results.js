import * as actionTypes from './actionTypes'

export const storeResults = (value) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(saveResults(value))
        }, 2000);
    }
   
}

export const deleteResults = (id) => {
    return {
        type: actionTypes.DELETE_RESULTS,
        id: id
    }
}

const saveResults=(value)=>{
    return {
        type: actionTypes.STORE_RESULTS,
        payload: value
    }
}