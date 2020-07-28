import { TOGGLE_IS_FETCHING, TOGGLE_IS_PHOTO_DETAIL_STATUS } from '../constants/actionsTypes';
import { INITIAL_STATE } from '../constants/constants';

const photoDetailReducer = (state = INITIAL_STATE.status, action) => {
    switch (action.type) {

        case TOGGLE_IS_PHOTO_DETAIL_STATUS : {
            return {
                ...state,
                photoDetailStatus: !state.photoDetailStatus
            }
        }

        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }


        default:
            return state
    }
};

export default photoDetailReducer;