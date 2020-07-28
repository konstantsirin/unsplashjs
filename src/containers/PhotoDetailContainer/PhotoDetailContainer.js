import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import PhotoDetail from '../../components/PhotoDetail/PhotoDetail';

import { getDataPhoto, getPhotoDetailStatus } from '../../selectors/photos-selectors';
import { toggleLikeUser } from '../../actions/asyncActions';
import { togglePhotoDetailStatus } from '../../actions/actionCreators';

const PhotoDetailContainer = (props) => {
    const { dataPhoto, photos, togglePhotoDetailStatus, toggleLikeUser, photoDetailStatus } = props;
    const photoId = photos.match.params.id;
    const photo = dataPhoto.filter(p => p.id === photoId);

    return (
        <PhotoDetail
            photo={ photo }
            photoDetailStatus = { photoDetailStatus }
            togglePhotoDetailStatus = { togglePhotoDetailStatus }
            toggleLikeUser = { toggleLikeUser }
        />
    );

}

const mapStateToProps = (state) => {

    return {
        dataPhoto: getDataPhoto(state),
        photoDetailStatus: getPhotoDetailStatus(state)
    }
};

export default compose(withRouter, connect(mapStateToProps, {toggleLikeUser, togglePhotoDetailStatus}))(PhotoDetailContainer);