import React from 'react';
import styles from "./ButtonLoad.module.css";
import {setPhoto} from "../../../actions";
import {connect} from "react-redux";

const ButtonLoad = (props) => {
    const {currentPage, isFetching, setPhoto} = props;
    return (
        <div>
            <button className={styles.loadBtn} onClick={(ev) => {setPhoto(currentPage);}} disabled={isFetching}>ЕЩЕ ФОТО</button>
        </div>
        )

}

const mapStateToProps = (state) => {
    return {
        currentPage: state.photosPage.currentPage,
        isFetching: state.photosPage.isFetching
    }
};

export default connect(mapStateToProps, {setPhoto})(ButtonLoad);
