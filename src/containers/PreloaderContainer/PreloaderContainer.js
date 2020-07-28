import React from 'react';

import { connect } from 'react-redux';

import { getIsFetching } from '../../selectors/photos-selectors';
import Preloader from '../../components/Preloader/Preloader';

const PreloaderContainer = (props) => {
    const { isFetching } = props;

    return (
        <Preloader
            isFetching = { isFetching }
        />
    );

}

const mapStateToProps = (state) => {

    return {
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, {})(PreloaderContainer);