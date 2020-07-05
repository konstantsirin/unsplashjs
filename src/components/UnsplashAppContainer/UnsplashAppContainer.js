import React from 'react';
import Header from '../Header/Header';
import UnsplashAppItem from './UnsplashAppItem/UnsplashAppItem';
import styles from './UnsplashAppContainer.module.css';
import {getPhoto} from '../../actions/index';
import {connect} from 'react-redux';
import ButtonLoad from '../Buttons/ButtonLoad/ButtonLoad';
import uniqid from 'uniqid';
import {getCurrentPage, getDataPhoto, getIsFetching} from '../../selectors/photos-selectors';


class UnsplashAppContainer extends React.Component {
    ON_SCROLL = (ev) => {
        const {currentPage, isFetching, getPhoto} = this.props;
        ev.preventDefault();
        let clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
        let documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
        let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

        if((documentHeight - clientHeight) <= scrollTop && !isFetching) {
            getPhoto(currentPage);
        }
    };

    componentDidMount() {
        const { currentPage, getPhoto } = this.props;
        getPhoto(currentPage);

        window.addEventListener('scroll', this.ON_SCROLL, false);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.ON_SCROLL);

    }


    render() {
        const {dataPhoto} = this.props;
        const {galleryContainer, galleryList} = styles;

            return (
                <>
                <Header />
                <div className={galleryContainer}>
                    <ul className={galleryList}>
                        {dataPhoto ? dataPhoto.map(photo => <UnsplashAppItem key={uniqid()} photo={photo}/>) : ''}
                    </ul>
                    <ButtonLoad />
                </div>
                </>
            )


    }
}

const mapStateToProps = (state) => {

    return {
        dataPhoto: getDataPhoto(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, {getPhoto})(UnsplashAppContainer);
