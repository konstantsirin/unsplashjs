import { toJson } from 'unsplash-js';

import { unsplash } from '../API/unsplashApi';

import {photos_data_normalize} from '../supportFunctions/index';

import {QUANTITY_REQUIRED_PHOTO} from '../constants/constants';
import {SET_PHOTO, TOGGLE_IS_FETCHING, TOGGLE_LIKE, TOGGLE_IS_PHOTO_DETAIL_STATUS} from '../constants/actionsTypes';


//setPhoto
const setPhoto = (photos) => { return {
    type: SET_PHOTO,
    photos: photos_data_normalize(photos)}
};

export const toggleIsFetching = () => {return {
    type: TOGGLE_IS_FETCHING}
};

export const getPhoto = (currentPage) => {
    return dispatch => {
        dispatch(toggleIsFetching());
        unsplash.photos.listPhotos(currentPage, QUANTITY_REQUIRED_PHOTO, 'latest')
            .then(toJson)
            .then(photos => {
                dispatch(setPhoto(photos));
                dispatch(toggleIsFetching());
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
};

//PhotoDetailStatus
export const togglePhotoDetailStatus = () => {return {
    type: TOGGLE_IS_PHOTO_DETAIL_STATUS}
};

//Like
const toggleLike = (id) => {return {
    type: TOGGLE_LIKE,
    id}
};

export const toggleLikeUser = (id, isLiked) => {
    return dispatch => {
        (isLiked ? unsplash.photos.unlikePhoto(id) : unsplash.photos.likePhoto(id))
            .then(toJson)
            .then(() => {
                dispatch(toggleLike(id))
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}

