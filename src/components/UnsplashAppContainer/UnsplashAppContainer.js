import React from 'react';
import Header from "../Header/Header";
import UnsplashAppItem from "./UnsplashAppItem/UnsplashAppItem";
import styles from './UnsplashAppContainer.module.css';
import {setPhoto, toggleIsFetching} from "../../actions/index";
import { unsplash } from '../../API/unsplashApi';
import {connect} from "react-redux";
import ButtonLoad from "../Buttons/ButtonLoad/ButtonLoad";


class UnsplashAppContainer extends React.Component {

    componentDidMount() {
        const { currentPage, setPhoto} = this.props;
        unsplash.auth.setBearerToken(localStorage.getItem('token'));
        setPhoto(currentPage);
    };



    render() {
        const {dataPhoto, isFetching, currentPage, setPhoto} = this.props;
        let id = 0;
        window.onscroll = () => {
            var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
            var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

            if((documentHeight - clientHeight) <= scrollTop) {
                setPhoto(currentPage);
            }
        };

            return (
                <>
                <Header />
                <div className={styles.galleryContainer}>
                    <ul className={styles.galleryList}>
                        {dataPhoto ? dataPhoto.map(photo => <UnsplashAppItem key={++id} photo={photo}/>) : ''}
                    </ul>
                    <ButtonLoad />
                </div>
                </>
            )


    }
}

const mapStateToProps = (state) => {
    return {
        dataPhoto: state.photosPage.dataPhoto,
        currentPage: state.photosPage.currentPage,
        isFetching: state.photosPage.isFetching
    }
};

export default connect(mapStateToProps, {setPhoto, toggleIsFetching})(UnsplashAppContainer);
