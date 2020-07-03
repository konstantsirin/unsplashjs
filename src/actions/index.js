import { toJson } from 'unsplash-js';
import { unsplash } from '../API/unsplashApi';
import {PER_PAGE} from "../global/constants/constants";
import {SET_PHOTO, TOGGLE_IS_FETCHING, TOGGLE_LIKE, TOGGLE_IS_PHOTO_DETAIL_STATUS} from "../global/constants/actionsTypes";
import {PHOTOS_DATA_NORMALIZE} from '../supportFunctions/index';

const setPhoto = (photos) => { return {
    type: SET_PHOTO,
    photos: PHOTOS_DATA_NORMALIZE(photos)}
};

export const toggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}};
const togglePhotoDetailStatus = (photoDetailStatus) => {return {type: TOGGLE_IS_PHOTO_DETAIL_STATUS, photoDetailStatus}};
const toggleLike = (id, isLiked) => {return {type: TOGGLE_LIKE, id, isLiked}};

export const enablePhotoDetailStatus = () => {
    return dispatch => {
        dispatch(togglePhotoDetailStatus(true));
    }
};

export const disablePhotoDetailStatus = () => {
    return dispatch => {
        dispatch(togglePhotoDetailStatus(false));
    }
};

export const getPhoto = (currentPage) => {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        unsplash.auth.setBearerToken(localStorage.getItem('token'));
        unsplash.photos.listPhotos(currentPage, PER_PAGE, 'latest')
            .then(toJson)
            .then(photos => {
                dispatch(setPhoto(photos));
                dispatch(toggleIsFetching(false));
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
};

export const toggleLikeUser = (id, isLiked) => {

    return dispatch => {

        if(isLiked) {
            unsplash.auth.setBearerToken(localStorage.getItem('token'));
            unsplash.photos.unlikePhoto(id)
                .then(toJson)
                .then(() => {
                    dispatch(toggleLike(id, false))
                })
                .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
        } else {
            unsplash.auth.setBearerToken(localStorage.getItem('token'));
            unsplash.photos.likePhoto(id)
                .then(toJson)
                .then(() => {
                    dispatch(toggleLike(id, true));
                })
                .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
        }
    }
}

