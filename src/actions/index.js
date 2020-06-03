import { toJson } from 'unsplash-js';
import { unsplash } from '../API/unsplashApi';

const  _photos = (photos) => {return photos.map((photo) => {return {photo}})};

const getPhoto = (photos) => { return {type: 'GET_PHOTO', photos} };
const likeUnlikePhoto = (id) => { return {type: 'LIKE_UNLIKE_PHOTO', id} };

export const setPhoto = (currentPage) => {
    return dispatch => {
        unsplash.photos.listPhotos(currentPage, 10, 'latest')
            .then(toJson)
            .then(photos => {
                console.log(photos);
                console.log(dispatch);
                photos = _photos(photos);
                dispatch(getPhoto(photos));
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
};

export const setLike = (id) => {
    return dispatch => {
        console.log(dispatch);
        console.log(id)
        unsplash.photos.likePhoto(id)
            .then(toJson)
            .then(() => {
                dispatch(likeUnlikePhoto(id));
            })
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}

export const disableLike = (id) => {
    console.log(id);
    return dispatch => {
        unsplash.photos.unlikePhoto(id)
            .then(toJson)
            .then(() => {dispatch(likeUnlikePhoto(id))})
            .catch((error) => {console.log(`ОШИБКА!!! ${error}`);})
    }
}
