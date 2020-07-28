import React from 'react';

import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Header from '../../components/Header/Header';
import UnsplashAppItem from '../../components/UnsplashAppItem/UnsplashAppItem';
import ButtonLoad from '../../components/Buttons/ButtonLoad/ButtonLoad';

import styles from '../../styles/UnsplashAppContainer.module.css';

import { getPhoto, toggleLikeUser } from '../../actions/asyncActions';
import { getCurrentPage, getDataPhoto, getIsFetching } from '../../selectors/photos-selectors';

class UnsplashAppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.ScrollBlockRef = React.createRef();
        this.handleScroll = () => {
            const { currentPage, getPhoto, isFetching } = this.props;
            const { scrollTop, clientHeight } = document.documentElement;
            const { scrollHeight } = this.ScrollBlockRef.current;

            if (scrollHeight - scrollTop === clientHeight && !isFetching) {
                getPhoto(currentPage);
            }
        };
    };

    componentDidMount() {
        const { dataPhoto, currentPage, getPhoto, isFetching } = this.props;

        if(dataPhoto.length === 0 && !isFetching) {
            getPhoto(currentPage);
        }

        window.addEventListener('scroll', this.handleScroll, false);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { dataPhoto, toggleLikeUser, getPhoto, currentPage, isFetching } = this.props;
        const { galleryContainer, galleryList } = styles;

            return (
                <div ref={this.ScrollBlockRef}>
                    <Header />

                    <div
                        className={ galleryContainer }
                    >
                        <ul
                            className={ galleryList }
                        >
                            { dataPhoto ? dataPhoto.map(photo => <UnsplashAppItem key={uniqid()} photo={ photo } toggleLikeUser={ toggleLikeUser }/>) : ''}
                        </ul>

                        <ButtonLoad
                            getPhoto = { getPhoto }
                            currentPage = { currentPage }
                            isFetching = { isFetching }
                        />
                    </div>

                </div>
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

export default connect(mapStateToProps, {getPhoto, toggleLikeUser})(UnsplashAppContainer);
