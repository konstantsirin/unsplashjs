let initialState = {
        dataPhoto : [],
        currentPage: 1,
        isFetching : false,
        photoDetailStatus : false
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PHOTO' : {
            return {
                ...state,
                dataPhoto: [...state.dataPhoto, ...action.photos],
                currentPage: state.currentPage + 1
            }
        }

        case 'LIKE_PHOTO' : {
            let dataPhoto = [...state.dataPhoto];
            let indexArr = dataPhoto.findIndex(item => item.photo.id === action.id);
            dataPhoto[indexArr].photo.liked_by_user = true;
            dataPhoto[indexArr].photo.likes++;
            return {
                ...state,
                dataPhoto: [...state.dataPhoto]
            }
        }

        case 'UNLIKE_PHOTO' : {
            let dataPhoto = [...state.dataPhoto];
            let indexArr = dataPhoto.findIndex(item => item.photo.id === action.id);
            dataPhoto[indexArr].photo.liked_by_user = false;
            dataPhoto[indexArr].photo.likes--;
            return {
                ...state,
                dataPhoto: [...state.dataPhoto]
            }
        }

        case 'TOGGLE_IS_FETCHING' : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case 'TOGGLE_IS_PHOTO_DETAIL_STATUS' : {
            return {
                ...state,
                photoDetailStatus: action.photoDetailStatus
            }
        }

        default:
            return state
    }
};

export default photosReducer;