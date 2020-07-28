import React from 'react';

import styles from '../../../styles/UnsplashAppItem.module.css';
import noUser from '../../../assets/images/no_user.png';

const PhotoDescription = (props) => {
    const { authorProfileLink, authorName, createdPhoto, authorProfileAvatar } = props;
    const { fotoProfilePrev, persDataProfile, nameProfile, datePublish } = styles;

    return (
        <a
            href={ authorProfileLink }
            target='_blank'
            rel='noopener noreferrer'
        >
            <span>
                <img
                    className={ fotoProfilePrev }
                    src={ authorProfileAvatar ? authorProfileAvatar : noUser }
                    alt='Фото профиля'/>
            </span>
            <div
                className={ persDataProfile }
            >
                <span
                    className={ nameProfile }
                >
                    { authorName ? authorName : null }
                </span>
                <span
                    className={ datePublish }
                >
                    { createdPhoto ? createdPhoto : null }
                </span>
            </div>
        </a>
    )
}

export default PhotoDescription;


