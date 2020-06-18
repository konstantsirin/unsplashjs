import React from 'react';
import noUser from "../../../assets/images/no_user.png";
import styles from '../../UnsplashAppContainer/UnsplashAppItem/UnsplashAppItem.module.css';

const PhotoDescription = (props) => {
    const {authorProfileLink, authorName, createdPhoto, authorProfileAvatar} = props;
    const {fotoProfilePrev, persDataProfile, nameProfile, datePublish} = styles;

    return (
        <a href={authorProfileLink} target="_blank" rel="noopener noreferrer">
            <span><img className={fotoProfilePrev} src={authorProfileAvatar ? authorProfileAvatar : noUser} alt="Фото профиля"/></span>
            <div className={persDataProfile}>
                <span className={nameProfile}>{authorName ? authorName : null}</span>
                <span className={datePublish}>{createdPhoto ? createdPhoto : null}</span>
            </div>
        </a>
    )
}

export default PhotoDescription;


