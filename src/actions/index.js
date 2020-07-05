import { toJson } from 'unsplash-js';
import { unsplash } from '../API/unsplashApi';
import {PER_PAGE} from '../constants/constants';
import {SET_PHOTO, TOGGLE_IS_FETCHING, TOGGLE_LIKE, TOGGLE_IS_PHOTO_DETAIL_STATUS} from '../constants/actionsTypes';
import {photos_data_normalize} from '../supportFunctions/index';

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
        unsplash.auth.setBearerToken(localStorage.getItem('token'));
        unsplash.photos.listPhotos(currentPage, PER_PAGE, 'latest')
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
        if(isLiked) {
            unsplash.auth.setBearerToken(localStorage.getItem('token'));
            unsplash.photos.unlikePhoto(id)
                .then(toJson)
                .then(() => {
                    dispatch(toggleLike(id))
                })
                .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
        } else {
            unsplash.auth.setBearerToken(localStorage.getItem('token'));
            unsplash.photos.likePhoto(id)
                .then(toJson)
                .then(() => {
                    dispatch(toggleLike(id));
                })
                .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
        }
    }
}