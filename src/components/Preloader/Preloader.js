import React from 'react';
import styles from "./Preloader.module.css";
import preloader from "../../assets/images/preloader.gif";
import {connect} from "react-redux";

const Preloader = (props) => {
    const {isFetching} = props;
    if(isFetching) {
        return (
            <div className={styles.preloaderBlock}>
                <div className={styles.preloaderBlockWrapper}>
                    <img className={styles.preloader} src={preloader} alt="Загрузка"/>
                </div>
            </div>
        )
    } else {
        return <></>;
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.photosPage.isFetching
    }
};

export default connect(mapStateToProps, {})(Preloader);