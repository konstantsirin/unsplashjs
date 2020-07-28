import { SET_PHOTO, TOGGLE_LIKE } from '../constants/actionsTypes';
import { INITIAL_STATE } from '../constants/constants';

const photosReducer = (state = INITIAL_STATE.photos, action) => {
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

            dataPhoto[indexArr].isLiked ? dataPhoto[indexArr].likes++ : dataPhoto[indexArr].likes--;

            return {
                ...state,
                dataPhoto: dataPhoto
            }
        }

        default:
            return state
    }
};

export default photosReducer;