import React from 'react';
import { connect } from 'react-redux';
import styles from '../../UnsplashAppContainer/UnsplashAppItem/UnsplashAppItem.module.css';
import like from "../../../assets/images/heart_red.svg";
import notLike from "../../../assets/images/heart.svg";
import {setLike, disableLike} from "../../../actions/index";

const Like = (props) => {
    const {id, liked_by_user, likes ,setLike, disableLike} = props;
    let likeUnlikePhoto = (id) => {
        liked_by_user ? disableLike(id) : setLike(id);
    }

    return (
        <button className={styles.likePhotoBtn}>
            <img className={styles.likeImg} src={liked_by_user ? like :  notLike} onClick={() => likeUnlikePhoto(id)} alt="like Button"/>
            <span className={styles.countLike}>
                    {likes ? likes : "0"}
                </span>
        </button>
    )
}

const mapStateToProps = state => {
    return {
        dataPhoto: state.photosPage.dataPhoto
    }
}

export default connect(mapStateToProps, {setLike, disableLike})(Like);
