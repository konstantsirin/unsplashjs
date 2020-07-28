import React from 'react';

import styles from '../../../styles/UnsplashAppItem.module.css';
import like from '../../../assets/images/heart_red.svg';
import notLike from '../../../assets/images/heart.svg';

const Like = (props) => {
    const { id, isLiked, likes, toggleLikeUser } = props;
    const { likePhotoBtn, likeImg, countLike } = styles;

    return (
        <button
            className={ likePhotoBtn }
        >
            <img
                className={ likeImg }
                src={isLiked ? like : notLike}
                onClick={() => toggleLikeUser(id, isLiked)}
                alt='like Button'
            />

            <span
                className={ countLike }
            >
                    {likes ? likes : '0'}
            </span>
        </button>
    )
}

export default Like;
