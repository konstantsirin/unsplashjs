import React from 'react';

import {connect} from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import PhotoDetail from './PhotoDetail/PhotoDetail.js';

import {getDataPhoto} from '../../selectors/photos-selectors';


const PhotoDetailContainer = (props) => {
    const {dataPhoto, photos} = props;
    const photoId = photos.match.params.id;
    const photo = dataPhoto.filter(p => p.id === photoId);

    return (<PhotoDetail photo={photo} />);

}

const mapStateToProps = (state) => {

    return {
        dataPhoto: getDataPhoto(state)
    }
};

export default compose(withRouter, connect(mapStateToProps, {}))(PhotoDetailContainer);