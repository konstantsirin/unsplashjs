import { toJson } from 'unsplash-js';

import { unsplash } from '../API/unsplashApi';

import {QUANTITY_REQUIRED_PHOTO} from '../constants/constants';
import {toggleIsFetching, setPhoto, toggleLike} from './actionCreators';

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

