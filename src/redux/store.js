import {createStore, applyMiddleware} from "redux";
import allReducers from './../reducers/index.js';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;
