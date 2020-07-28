import React from 'react';

import UnsplashAppItemHeader from './UnsplashAppItemHeader/UnsplashAppItemHeader';
import UnsplashAppItemBody from './UnsplashAppItemBody/UnsplashAppItemBody';
import UnsplashAppItemFooter from './UnsplashAppItemFooter/UnsplashAppItemFooter';

import styles from '../../styles/UnsplashAppItem.module.css';

class UnsplashAppItem extends React.Component {

    render() {
        const { photo, toggleLikeUser } = this.props;
        const { galleryItemBlock, galleryItem} = styles;
        const { authorName, isLiked, id, likes, createdPhoto, authorProfileLink, photoImgSmall, authorProfileAvatar } = photo;

        return(
            <li
                className={ galleryItemBlock }
            >
                <div
                    className={ galleryItem }
                >
                    <UnsplashAppItemHeader
                        isLiked={ isLiked }
                        id={ id }
                        likes={ likes }
                        toggleLikeUser={ toggleLikeUser }
                    />
                    <UnsplashAppItemBody
                        photoImgSmall={photoImgSmall}
                        id={id}
                    />
                    <UnsplashAppItemFooter
                        authorProfileLink={ authorProfileLink }
                        authorName={ authorName }
                        createdPhoto={ createdPhoto }
                        authorProfileAvatar={ authorProfileAvatar }
                    />
                </div>
            </li>
        )
    }
}

export default UnsplashAppItem;
