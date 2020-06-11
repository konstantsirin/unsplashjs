import {createStore, applyMiddleware} from "redux";
import allReducers from './../reducers/index.js';
import thunkMiddleware from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default store;
