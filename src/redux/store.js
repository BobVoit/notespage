import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import appReducer from './appReducer';
import notesReducer from './noteReducer';
import userReducer from './userReducer';



let reducers = combineReducers({
    form: formReducer,
    user: userReducer,
    app: appReducer, 
    note: notesReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;


export default store;