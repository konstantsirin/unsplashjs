import {SET_PHOTO, TOGGLE_IS_FETCHING, TOGGLE_LIKE, TOGGLE_IS_PHOTO_DETAIL_STATUS} from '../global/constants/actionsTypes';

const initialState = {
        dataPhoto : [],
        currentPage: 1,
        isFetching : false,
        photoDetailStatus : false
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PHOTO : {
            return {
                ...state,
                dataPhoto: [...state.dataPhoto, ...action.photos],
                currentPage: state.currentPage + 1
            }
        }

        case TOGGLE_LIKE : {
            const dataPhoto = [...state.dataPhoto];
            const indexArr = dataPhoto.findIndex(item => item.id === action.id);
            dataPhoto[indexArr].isLiked = action.isLiked;
            if(action.isLiked) {
                dataPhoto[indexArr].likes++;
            } else {
                dataPhoto[indexArr].likes--;
            }
            return {
                ...state,
                dataPhoto: dataPhoto
            }

        }

        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_PHOTO_DETAIL_STATUS : {
            return {
                ...state,
                photoDetailStatus: action.photoDetailStatus
            }
        }

        default:
            return state
    }
};

export default photosReducer;