import { SET_PHOTO, TOGGLE_IS_FETCHING, TOGGLE_LIKE, TOGGLE_IS_PHOTO_DETAIL_STATUS } from '../constants/actionsTypes';
import { INITIAL_STATE } from '../constants/constants'

const photosReducer = (state = INITIAL_STATE, action) => {
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
            dataPhoto[indexArr].isLiked = !dataPhoto[indexArr].isLiked;

            if(dataPhoto[indexArr].isLiked) {
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
                isFetching: !state.isFetching
            }
        }

        case TOGGLE_IS_PHOTO_DETAIL_STATUS : {
            return {
                ...state,
                photoDetailStatus: !state.photoDetailStatus
            }
        }

        default:
            return state
    }
};

export default photosReducer;