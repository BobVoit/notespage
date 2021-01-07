import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';


import userReducer from './userReducer';



let reducers = combineReducers({
    form: formReducer,
    user: userReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;


export default store;