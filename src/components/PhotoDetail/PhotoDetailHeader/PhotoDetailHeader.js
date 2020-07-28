import React from 'react';

import Like from '../../PhotoContent/Like/Like';

import styles from '../../../styles/PhotoDetail.module.css';

class PhotoDetailHeader extends React.Component {

    render() {
        const { photoDetailHeader } = styles;
        const { isLiked, id, likes, toggleLikeUser } = this.props;

        return (
            <header
                className={ photoDetailHeader }
            >
                <Like
                    isLiked={ isLiked }
                    id={ id }
                    likes={ likes }
                    toggleLikeUser = { toggleLikeUser }
                />
            </header>
        );
    }
}

export default PhotoDetailHeader;