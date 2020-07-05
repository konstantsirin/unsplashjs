import React from 'react';
import styles from './PhotoDetail.module.css';
import {disable_scroll, return_to_back_window, return_to_back} from '../../../supportFunctions';
import {connect} from 'react-redux';
import {togglePhotoDetailStatus, } from '../../../actions/index';
import Like from '../../PhotoContent/Like/Like';
import PhotoDescription from '../../PhotoContent/PhotoDescription/PhotoDescription';
import ButtonClose from '../../Buttons/ButtonClose/ButtonClose';
import {getDataPhoto} from '../../../selectors/photos-selectors';

class PhotoDetail extends React.Component {

    componentDidMount() {
        const {togglePhotoDetailStatus} = this.props;
        disable_scroll();
        togglePhotoDetailStatus();
    };

    componentDidUpdate() {
        const {photoDetailStatus} = this.props;
        return_to_back_window(photoDetailStatus);
    }

    componentWillUnmount() {
        const {togglePhotoDetailStatus} = this.props;
        togglePhotoDetailStatus();
    }

    render() {
        const {photo} = this.props;
        if (photo.length !== 0 ) {
            const {photoDetailContainerWrapper, photoDetailContainer, photoDetailWrapper, photoDetailHeader, photoDetailImage, photoDetailFooter} = styles;
            const {isLiked, id, likes, authorName, createdPhoto, authorProfileLink, photoImgRegular, authorProfileAvatar} = photo[0];

            return (<>
                    <div onClick={() => {return_to_back()}} className={photoDetailContainerWrapper}>
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

    return {
        dataPhoto: getDataPhoto(state)
    }
}

export default connect(mapStateToProps, {togglePhotoDetailStatus})(PhotoDetail);
