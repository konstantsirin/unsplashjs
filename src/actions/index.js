import { toJson } from 'unsplash-js';
import { unsplash } from '../API/unsplashApi';

const  normalizePhotos = (photos) => {return photos.map((photo) => {return {photo}})};

const getPhoto = (photos) => { return {type: 'GET_PHOTO', photos} };
const likePhoto = (id) => {return {type: 'LIKE_PHOTO', id}};
const unlikePhoto = (id) => {return {type: 'UNLIKE_PHOTO', id}};
export const toggleIsFetching = (isFetching) => {return {type: 'TOGGLE_IS_FETCHING', isFetching}};
const togglePhotoDetailStatus = (photoDetailStatus) => {return {type: 'TOGGLE_IS_PHOTO_DETAIL_STATUS', photoDetailStatus}};

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

export const setPhoto = (currentPage) => {
    const perPage = 10;
    return dispatch => {
        dispatch(toggleIsFetching(true));
        unsplash.photos.listPhotos(currentPage, perPage, 'latest')
            .then(toJson)
            .then(photos => {
                photos = normalizePhotos(photos);
                dispatch(getPhoto(photos));
                dispatch(toggleIsFetching(false));
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
};

export const setLike = (id) => {
    return dispatch => {
        unsplash.photos.likePhoto(id)
            .then(toJson)
            .then(() => {
                dispatch(likePhoto(id));
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}

export const disableLike = (id) => {
    return dispatch => {
        unsplash.photos.unlikePhoto(id)
            .then(toJson)
            .then(() => {dispatch(unlikePhoto(id))})
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}
