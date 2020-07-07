import React from 'react';

import {connect} from 'react-redux';

import {getPhoto} from '../../../actions';
import {getCurrentPage, getIsFetching} from '../../../selectors/photos-selectors';

import styles from './ButtonLoad.module.css';

const ButtonLoad = (props) => {
    const {currentPage, isFetching, setPhoto} = props;
    const {loadBtn} = styles;
    return (
        <div>
            <button className={loadBtn} onClick={(ev) => {setPhoto(currentPage);}} disabled={isFetching}>ЕЩЕ ФОТО</button>
        </div>
        )

}

const mapStateToProps = (state) => {

    return {
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, {getPhoto})(ButtonLoad);
