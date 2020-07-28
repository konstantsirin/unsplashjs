import {createSelector} from 'reselect';

const getDataPhotoSelector = (state) => {
    return state.photos.dataPhoto;
};

export const getDataPhoto = createSelector(getDataPhotoSelector,
    (dataPhoto) => {
    return dataPhoto;
});

const getCurrentPageSelector = (state) => {
    return state.photos.currentPage;
};

export const getCurrentPage = createSelector(getCurrentPageSelector,
    (currentPage) => {
        return currentPage;
});

const getIsFetchingSelector = (state) => {
    return state.status.isFetching;
};

export const getIsFetching = createSelector(getIsFetchingSelector,
    (isFetching) => {
        return isFetching;
});

export const getPhotoDetailStatus = (state) => {
    return state.status.photoDetailStatus;
};