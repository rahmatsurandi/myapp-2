const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    value: 0,
    age: 17
}


// reducer
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 2
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}


// store
const store = createStore(rootReducer);
console.log(store.getState())
// subsribe
store.subscribe(() => {
    console.log("store change", store.getState())
})

// dispatching
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 })
console.log(store.getState())

// subscibtion
