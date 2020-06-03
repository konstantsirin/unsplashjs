let initialState = {
        dataPhoto : [],
        currentPage: 1
};

const photosReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case 'GET_PHOTO' :
                return {
                    ...state,
                    dataPhoto: [...state.dataPhoto, ...action.photos],
                    currentPage: state.currentPage + 1
                }

        case 'LIKE_UNLIKE_PHOTO' : {
            console.log(action.id);
            let dataPhoto = [...state.dataPhoto];
            let indexArr = dataPhoto.findIndex(item => item.photo.id === action.id)
            console.log(indexArr);
            console.log(dataPhoto[indexArr].photo);

            if(dataPhoto[indexArr].photo.liked_by_user) {
                dataPhoto[indexArr].photo.liked_by_user = false;
                dataPhoto[indexArr].photo.likes--;
            } else {
                dataPhoto[indexArr].photo.liked_by_user = true;
                dataPhoto[indexArr].photo.likes++;
            }

            return {
                ...state,
                dataPhoto: [...state.dataPhoto]

            }
        }


        default:
            return state
    }
};

export default photosReducer;