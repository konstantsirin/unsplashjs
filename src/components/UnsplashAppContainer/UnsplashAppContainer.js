import React from 'react';
import Header from "../Header/Header";
import UnsplashAppItem from "./UnsplashAppItem/UnsplashAppItem";
import styles from './UnsplashAppContainer.module.css';
import {setPhoto} from "../../actions/index";
import { unsplash } from '../../API/unsplashApi';
import {connect} from "react-redux";

class UnsplashAppContainer extends React.Component {

    componentDidMount() {
        const { currentPage, setPhoto } = this.props;
        unsplash.auth.setBearerToken(localStorage.getItem('token'));
        setPhoto(currentPage);
    };



    render() {
        const {dataPhoto, currentPage, setPhoto} = this.props;
        let id = 0;
        window.onscroll = () => {
            var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
            var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

            if((documentHeight - clientHeight) <= scrollTop) {
                console.log('Достигнут конец документа. Загружаю дополнительный контент.');
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
                    <button className={styles.loadBtn} onClick={(ev) => {setPhoto(currentPage);}}>ЕЩЕ ФОТО</button>
                </div>
                </>
            )


    }
}

const mapStateToProps = (state) => {
    return {
        dataPhoto: state.photosPage.dataPhoto,
        currentPage: state.photosPage.currentPage
    }
};

export default connect(mapStateToProps, {setPhoto})(UnsplashAppContainer);
