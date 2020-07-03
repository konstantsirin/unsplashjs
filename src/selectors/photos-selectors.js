import {createSelector} from 'reselect';

const getDataPhotoSelector = (state) => {
    return state.photosPage.dataPhoto;
};

export const getDataPhoto = createSelector(getDataPhotoSelector,
    (dataPhoto) => {
    return dataPhoto;
});

const getCurrentPageSelector = (state) => {
    return state.photosPage.currentPage;
};

export const getCurrentPage = createSelector(getCurrentPageSelector,
    (currentPage) => {
        return currentPage;
});

const getIsFetchingSelector = (state) => {
    return state.photosPage.isFetching;
};

export const getIsFetching = createSelector(getIsFetchingSelector,
    (isFetching) => {
        return isFetching;
});

const getPhotoDetailStatusSelector = (state) => {
    return state.photosPage.photoDetailStatus;
};

export const getPhotoDetailStatus = createSelector(getPhotoDetailStatusSelector,
    (photoDetailStatus) => {
        return photoDetailStatus;
});