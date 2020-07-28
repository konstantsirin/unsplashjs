import React from 'react';

import Like from '../../PhotoContent/Like/Like';

import styles from '../../../styles/UnsplashAppItem.module.css';

class UnsplashAppItemHeader extends React.Component {

    render() {
        const { galleryItemHeader } = styles;
        const { isLiked, id, likes, toggleLikeUser } = this.props;

        return(
            <header
                className={ galleryItemHeader }
            >
                <Like
                    isLiked={ isLiked }
                    id={ id }
                    likes={ likes }
                    toggleLikeUser = { toggleLikeUser }
                />
            </header>

        )
    }
}

export default UnsplashAppItemHeader;