import React from 'react';
import styles from './ButtonLoad.module.css';
import {getPhoto} from '../../../actions';
import {connect} from 'react-redux';
import {getCurrentPage, getIsFetching} from '../../../selectors/photos-selectors';

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
