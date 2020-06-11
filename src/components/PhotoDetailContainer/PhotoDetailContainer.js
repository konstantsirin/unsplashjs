import React from 'react';
import PhotoDetail from "./PhotoDetail/PhotoDetail.js";
import {connect} from "react-redux";
import { compose } from 'redux';
import { withRouter } from 'react-router';
import {setLike, disableLike, enablePhotoDetailStatus, disablePhotoDetailStatus} from "../../actions/index";


const PhotoDetailContainer = (props) => {
    const {dataPhoto, photos} = props;
    let photoId = photos.match.params.id;
    let photo = dataPhoto.filter(p => p.photo.id === photoId);

    return (<PhotoDetail photo={photo}/>);

}

const mapStateToProps = (state) => {
    return {
        dataPhoto: state.photosPage.dataPhoto
    }
};

export default compose(withRouter, connect(mapStateToProps, {setLike, disableLike, enablePhotoDetailStatus, disablePhotoDetailStatus}))(PhotoDetailContainer);