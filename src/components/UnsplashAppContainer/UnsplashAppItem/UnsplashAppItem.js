import React from 'react';
import styles from './UnsplashAppItem.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Like from '../../PhotoContent/Like/Like.js';
import PhotoDescription from '../../PhotoContent/PhotoDescription/PhotoDescription.js';
import {getDataPhoto} from '../../../selectors/photos-selectors';

class UnsplashAppItem extends React.Component {

    render() {
        const {photo} = this.props;
        const {galleryItemBlock, galleryItem, galleryItemHeader, galleryItemImageBlock, galleryItemImage, galleryItemFooter} = styles;
        const {authorName, isLiked, id, likes, createdPhoto, authorProfileLink, photoImgSmall, authorProfileAvatar} = photo;
        const PATH = `/unsplashapp/${id}`;

        return(<li className={galleryItemBlock}>
                        <div className={galleryItem}>
                            <header className={galleryItemHeader}>
                                <Like isLiked={isLiked} id={id} likes={likes} />
                            </header>
                            <NavLink to={PATH}>
                                <div className={galleryItemImageBlock}>
                                    <img className={galleryItemImage}
                                         src={photoImgSmall}
                                         alt="Изображение"/>
                                </div>
                            </NavLink>
                            <footer className={galleryItemFooter}>
                                <PhotoDescription authorProfileLink={authorProfileLink} authorName={authorName} createdPhoto={createdPhoto} authorProfileAvatar={authorProfileAvatar}/>
                            </footer>
                        </div>

                </li>
        )
    }
}

const mapStateToProps = state => {

    return {
        dataPhoto: getDataPhoto(state)
    }
}

export default connect(mapStateToProps, {})(UnsplashAppItem)
