import React from 'react';

import { connect } from 'react-redux';

import {toggleLikeUser} from '../../../actions/index';
import {getDataPhoto} from '../../../selectors/photos-selectors';

import styles from '../../UnsplashAppContainer/UnsplashAppItem/UnsplashAppItem.module.css';
import like from '../../../assets/images/heart_red.svg';
import notLike from '../../../assets/images/heart.svg';

const Like = (props) => {
    const {id, isLiked, likes, toggleLikeUser} = props;
    const {likePhotoBtn, likeImg, countLike} = styles;

    return (
        <button className={likePhotoBtn}>
            <img className={likeImg} src={isLiked ? like : notLike} onClick={() => toggleLikeUser(id, isLiked)} alt="like Button"/>
            <span className={countLike}>
                    {likes ? likes : '0'}
                </span>
        </button>
    )
}

const mapStateToProps = state => {

    return {
        dataPhoto: getDataPhoto(state)
    }
}

export default connect(mapStateToProps, {toggleLikeUser})(Like);
