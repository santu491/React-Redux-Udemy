const redux =require('redux')
const createStore= redux.createStore

const initialState={
    counter:0
}

//reducer
const rootReducer=(state=initialState,action)=>{
    if(action.type==="INC_COUNT"){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==="ADD_COUNT"){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
}

//store
const store=createStore(rootReducer)
console.log(store.getState())

//Subscription

store.subscription(()=>{
    console.log("subscription", store.getState())
})

//dispatchActions.

store.dispatch({type:'INC_COUNT'})
store.dispatch({type:'ADD_COUNT',value:5})

console.log(store.getState())