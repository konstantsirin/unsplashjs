import {combineReducers} from "redux";
import photosReducer from "./photos-reducers";

const allReducers = combineReducers({
    photosPage : photosReducer
});



export default allReducers;
