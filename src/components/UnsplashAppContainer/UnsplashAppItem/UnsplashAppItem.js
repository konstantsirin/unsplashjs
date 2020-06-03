import React from 'react';
import notLike from '../../../assets/images/heart.svg';
import like from '../../../assets/images/heart_red.svg';
import noUser from '../../../assets/images/no_user.png';
import styles from './UnsplashAppItem.module.css';
import {normalizeDate} from "../../../supportFunctions/index";
import {NavLink} from "react-router-dom";
import {setLike, disableLike} from "../../../actions/index";
import {connect} from "react-redux";

class UnsplashAppItem extends React.Component {

    render() {

        const {photo, setLike, disableLike} = this.props;
        let _photo = photo.photo;
        let path = "/unsplashapp/" + _photo.id;
        let userProfileLink = () => {window.open(_photo.user.links.html, "_blank");};
        let likeUnlikePhoto = (id) => {
            _photo.liked_by_user ? disableLike(id) : setLike(id);
        }

        return(<li key={_photo.id} className={styles.galleryItemBlock}>

                        <div className={styles.galleryItem}>
                                <header className={styles.galleryItemHeader}>
                                    <button className={styles.likePhotoBtn}>
                                        <img className={styles.likeImg} src={_photo.liked_by_user ? like :  notLike} onClick={() => likeUnlikePhoto(_photo.id)} alt="like Button"/>
                                        <span className={styles.countLike}>
                                                {_photo.likes}
                                        </span>
                                    </button>
                                </header>
                                <NavLink to={path}>
                                    <div className={styles.galleryItemImageBlock}>
                                        <img className={styles.galleryItemImage}
                                             src={_photo.urls.small}
                                             alt="Изображение"/>
                                    </div>
                                </NavLink>
                                <footer className={styles.galleryItemFooter}>
                                    <div onClick={userProfileLink}>
                                        <span><img className={styles.fotoProfilePrev} src={photo ? _photo.user.profile_image.small : noUser} alt="Фото профиля"/></span>
                                        <div className={styles.persDataProfile}>
                                            <span className={styles.nameProfile}>{_photo.user.name}</span>
                                            <span className={styles.datePublish}>{normalizeDate(_photo.created_at)}</span>
                                        </div>
                                    </div>
                                </footer>

                        </div>

                </li>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataPhoto: state.photosPage.dataPhoto
    }
}

export default connect(mapStateToProps, {setLike, disableLike})(UnsplashAppItem)
