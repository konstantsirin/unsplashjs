import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import photosReducer from '../reducers/photosReducer';
import statusReducer from '../reducers/statusReducer';

const reducer = combineReducers({
    photos: photosReducer,
    status: statusReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;