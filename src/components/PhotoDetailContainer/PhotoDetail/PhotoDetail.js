import React from 'react';
import styles from './PhotoDetail.module.css';
import {disableScroll, returnToBackWindow, returnToBack} from "../../../supportFunctions";
import {connect} from 'react-redux';
import {setLike, disableLike, enablePhotoDetailStatus, disablePhotoDetailStatus} from "../../../actions/index";
import Like from "../../PhotoContent/Like/Like";
import PhotoDescription from "../../PhotoContent/PhotoDescription/PhotoDescription";
import ButtonClose from "../../Buttons/ButtonClose/ButtonClose";

class PhotoDetail extends React.Component {

    componentDidMount() {
        const {enablePhotoDetailStatus} = this.props;
        disableScroll();
        enablePhotoDetailStatus();
    };

    componentDidUpdate() {
        const {photoDetailStatus} = this.props;
        returnToBackWindow(photoDetailStatus);
    }

    componentWillUnmount() {
        const {disablePhotoDetailStatus} = this.props;
        disablePhotoDetailStatus();
    }

    render() {
        const {photo, setLike, disableLike} = this.props;

        if (photo.length !== 0 ) {
            let currentPhoto = photo[0].photo;
            let userProfileLink = () => {window.open(currentPhoto.user.links.html, "_blank");};

            return (<>
                    <div onClick={() => {returnToBack()}} className={styles.photoDetailContainerWrapper}>
                        <div  className={styles.photoDetailContainer} onClick={(event) => {event.stopPropagation();}}>
                            <div className={styles.photoDetailWrapper}>
                                <header className={styles.photoDetailHeader}>
                                    <Like liked_by_user={currentPhoto.liked_by_user} id={currentPhoto.id} likes={currentPhoto.likes} setLike={setLike} disableLike={disableLike}/>
                                </header>

                                <ButtonClose />

                                <span>
                                    <img className={styles.photoDetailImage} src={currentPhoto ? currentPhoto.urls.regular : null} alt="Изображение" />
                                </span>

                                <footer className={styles.photoDetailFooter}>
                                    <PhotoDescription userProfileLink={userProfileLink} userName={currentPhoto.user.name} photoCreated={currentPhoto.created_at} profileImageSmall={currentPhoto.user.profile_image.small}/>
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
}

const mapStateToProps = state => {
    return {
        dataPhoto: state.photosPage.dataPhoto,
        photoDetailStatus: state.photosPage.photoDetailStatus,
    }
}

export default connect(mapStateToProps, {setLike, disableLike, enablePhotoDetailStatus, disablePhotoDetailStatus})(PhotoDetail);
