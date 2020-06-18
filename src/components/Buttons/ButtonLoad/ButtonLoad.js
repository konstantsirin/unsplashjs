import React from 'react';
import styles from "./ButtonLoad.module.css";
import {getPhoto} from "../../../actions";
import {connect} from "react-redux";

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
    const {currentPage, isFetching} = state.photosPage;
    return {
        currentPage: currentPage,
        isFetching: isFetching
    }
};

export default connect(mapStateToProps, {getPhoto})(ButtonLoad);
