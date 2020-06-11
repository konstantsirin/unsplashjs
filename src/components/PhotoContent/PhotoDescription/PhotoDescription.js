import React from 'react';
import noUser from "../../../assets/images/no_user.png";
import {normalizeDate} from "../../../supportFunctions";
import styles from '../../UnsplashAppContainer/UnsplashAppItem/UnsplashAppItem.module.css';

const PhotoDescription = (props) => {
    const {userProfileLink, userName, photoCreated, profileImageSmall} = props;

    return (
        <div onClick={userProfileLink}>
            <span><img className={styles.fotoProfilePrev} src={profileImageSmall ? profileImageSmall : noUser} alt="Фото профиля"/></span>
            <div className={styles.persDataProfile}>
                <span className={styles.nameProfile}>{userName ? userName : null}</span>
                <span className={styles.datePublish}>{photoCreated ? normalizeDate(photoCreated) : null}</span>
            </div>
        </div>
    )
}

export default PhotoDescription;


