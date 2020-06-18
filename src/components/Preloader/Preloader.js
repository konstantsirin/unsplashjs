import React from 'react';
import styles from "./Preloader.module.css";
import preloader from "../../assets/images/preloader.gif";
import {connect} from "react-redux";

const Preloader = (props) => {
    const {isFetching} = props;
    const {preloaderBlock, preloaderBlockWrapper, preloaderImg} = styles;
    if(isFetching) {
        return (
            <div className={preloaderBlock}>
                <div className={preloaderBlockWrapper}>
                    <img className={preloaderImg} src={preloader} alt="Загрузка"/>
                </div>
            </div>
        )
    } else {
        return <></>;
    }
}

const mapStateToProps = (state) => {
    const {isFetching} = state.photosPage;
    return {
        isFetching: isFetching
    }
};

export default connect(mapStateToProps, {})(Preloader);