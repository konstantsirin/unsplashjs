import React from 'react';
import styles from './PhotoDetail.module.css';
import notLike from '../../../assets/images/heart.svg';
import noUser from '../../../assets/images/no_user.png';
import {normalizeDate} from "../../../supportFunctions";
import like from "../../../assets/images/heart_red.svg";
import {connect} from 'react-redux';
import {setLike, disableLike} from "../../../actions/index";

function PhotoDetail(props){
    const {photo, setLike, disableLike} = props;
    let currentPhoto = photo[0];
    let userProfileLink = () => {window.open(currentPhoto.user.links.html, "_blank");};
    let likeUnlikePhoto = (id) => {
        currentPhoto.liked_by_user ? disableLike(id) : setLike(id);
    }

    let disableScroll = () => {
        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    };
    disableScroll();

    let enableScroll = () => {
        window.onscroll=function(){};
    };

    if (currentPhoto) {
        currentPhoto = currentPhoto.photo;
        return (<>
                <div className={styles.photoDetailContainerWrapper}>
                    <div className={styles.photoDetailContainer}>
                        <div className={styles.photoDetailWrapper}>
                            <header className={styles.photoDetailHeader}>
                                <button className={styles.likePhotoBtn} >
                                    <img className={styles.likeImg} src={currentPhoto.liked_by_user ? like :  notLike} onClick={() => likeUnlikePhoto(currentPhoto.id)} alt="like Button"/>
                                    <span className={styles.countLike}>
                                        {currentPhoto ? currentPhoto.likes : null}
                                    </span>
                                </button>
                            </header>
                            <button className={styles.photoDetailClose} onClick={() => {window.history.back(); enableScroll();}}>X</button>
                            <img onClick={() => {window.history.back(); enableScroll();}} className={styles.photoDetailImage} src={currentPhoto ? currentPhoto.urls.regular : null} alt="Изображение" />
                            <footer className={styles.photoDetailFooter}>
                                <div onClick={userProfileLink}>
                                    <span><img className={styles.fotoProfilePrev} src={currentPhoto ? currentPhoto.user.profile_image.small : noUser} alt="Фото профиля"/></span>
                                    <div className={styles.persDataProfile}>
                                        <span className={styles.nameProfile}>{currentPhoto ? currentPhoto.user.name : null}</span>
                                        <span className={styles.datePublish}>{currentPhoto ? normalizeDate(currentPhoto.created_at) : null}</span>
                                    </div>
                                </div>
                            </footer>
                        </div>

                    </div>
                </div>}
            </>
        );
    } else {
        return (<></>)
    }

}

const mapStateToProps = state => {
    return {
        dataPhoto: state.photosPage.dataPhoto
    }
}

export default connect(mapStateToProps, {setLike, disableLike})(PhotoDetail);
