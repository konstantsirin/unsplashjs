import {SET_PHOTO, TOGGLE_IS_FETCHING, TOGGLE_IS_PHOTO_DETAIL_STATUS, TOGGLE_LIKE} from '../constants/actionsTypes';
import {photosDataNormalize} from '../supportFunctions';

export const setPhoto = (photos) => { return {
    type: SET_PHOTO,
    photos: photosDataNormalize(photos)}
};

export const toggleIsFetching = () => {return {
    type: TOGGLE_IS_FETCHING}
};

export const togglePhotoDetailStatus = () => {return {
    type: TOGGLE_IS_PHOTO_DETAIL_STATUS}
};

export const toggleLike = (id) => {return {
    type: TOGGLE_LIKE,
    id}
};
