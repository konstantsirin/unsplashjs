import {createSelector} from 'reselect';

const getDataPhotoSelector = (state) => {
    return state.dataPhoto;
};

export const getDataPhoto = createSelector(getDataPhotoSelector,
    (dataPhoto) => {
    return dataPhoto;
});

const getCurrentPageSelector = (state) => {
    return state.currentPage;
};

export const getCurrentPage = createSelector(getCurrentPageSelector,
    (currentPage) => {
        return currentPage;
});

const getIsFetchingSelector = (state) => {
    return state.isFetching;
};

export const getIsFetching = createSelector(getIsFetchingSelector,
    (isFetching) => {
        return isFetching;
});
