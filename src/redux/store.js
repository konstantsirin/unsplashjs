import {createStore, applyMiddleware} from "redux";
import allReducers from './../reducers/index.js';
import thunkMiddleware from 'redux-thunk';

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
