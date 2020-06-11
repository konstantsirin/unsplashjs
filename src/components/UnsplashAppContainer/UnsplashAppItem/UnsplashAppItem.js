import React from 'react';
import styles from './UnsplashAppItem.module.css';
import {NavLink} from "react-router-dom";
import {setLike, disableLike} from "../../../actions/index";
import {connect} from "react-redux";
import Like from '../../PhotoContent/Like/Like.js';
import PhotoDescription from '../../PhotoContent/PhotoDescription/PhotoDescription.js';

class UnsplashAppItem extends React.Component {

    render() {

        const {photo, setLike, disableLike} = this.props;
        let _photo = photo.photo;
        let path = "/unsplashapp/" + _photo.id;
        let userProfileLink = () => {window.open(_photo.user.links.html, "_blank");};

        return(<li key={_photo.id} className={styles.galleryItemBlock}>
                        <div className={styles.galleryItem}>
                            <header className={styles.galleryItemHeader}>
                                <Like liked_by_user={_photo.liked_by_user} id={_photo.id} likes={_photo.likes} setLike={setLike} disableLike={disableLike} />
                            </header>
                            <NavLink to={path}>
                                <div className={styles.galleryItemImageBlock}>
                                    <img className={styles.galleryItemImage}
                                         src={_photo.urls.small}
                                         alt="Изображение"/>
                                </div>
                            </NavLink>
                            <footer className={styles.galleryItemFooter}>
                                <PhotoDescription userProfileLink={userProfileLink} userName={_photo.user.name} photoCreated={_photo.created_at} profileImageSmall={_photo.user.profile_image.small}/>
                            </footer>
                        </div>

                </li>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataPhoto: state.photosPage.dataPhoto,
    }
}

export default connect(mapStateToProps, {setLike, disableLike})(UnsplashAppItem)
