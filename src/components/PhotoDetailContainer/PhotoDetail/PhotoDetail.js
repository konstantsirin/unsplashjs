import React from 'react';
import styles from './PhotoDetail.module.css';
import {DISABLE_SCROLL, RETURN_TO_BACK_WINDOW, RETURN_TO_BACK} from "../../../supportFunctions";
import {connect} from 'react-redux';
import {enablePhotoDetailStatus, disablePhotoDetailStatus} from "../../../actions/index";
import Like from "../../PhotoContent/Like/Like";
import PhotoDescription from "../../PhotoContent/PhotoDescription/PhotoDescription";
import ButtonClose from "../../Buttons/ButtonClose/ButtonClose";

class PhotoDetail extends React.Component {

    componentDidMount() {
        const {enablePhotoDetailStatus} = this.props;
        DISABLE_SCROLL();
        enablePhotoDetailStatus();
    };

    componentDidUpdate() {
        const {photoDetailStatus} = this.props;
        RETURN_TO_BACK_WINDOW(photoDetailStatus);
    }

    componentWillUnmount() {
        const {disablePhotoDetailStatus} = this.props;
        disablePhotoDetailStatus();
    }

    render() {
        const {photo} = this.props;
        if (photo.length !== 0 ) {
            const {photoDetailContainerWrapper, photoDetailContainer, photoDetailWrapper, photoDetailHeader, photoDetailImage, photoDetailFooter} = styles;
            const {isLiked, id, likes, authorName, createdPhoto, authorProfileLink, photoImgRegular, authorProfileAvatar} = photo[0];

            return (<>
                    <div onClick={() => {RETURN_TO_BACK()}} className={photoDetailContainerWrapper}>
                        <div  className={photoDetailContainer} onClick={(event) => {event.stopPropagation();}}>
                            <div className={photoDetailWrapper}>
                                <header className={photoDetailHeader}>
                                    <Like isLiked={isLiked} id={id} likes={likes} />
                                </header>

                                <ButtonClose />

                                <span>
                                    <img className={photoDetailImage} src={photoImgRegular} alt="Изображение" />
                                </span>

                                <footer className={photoDetailFooter}>
                                    <PhotoDescription authorProfileLink={authorProfileLink} authorName={authorName} createdPhoto={createdPhoto} authorProfileAvatar={authorProfileAvatar}/>
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
    const {dataPhoto, photoDetailStatus} = state.photosPage;
    return {
        dataPhoto: dataPhoto,
        photoDetailStatus: photoDetailStatus,
    }
}

export default connect(mapStateToProps, {enablePhotoDetailStatus, disablePhotoDetailStatus})(PhotoDetail);
