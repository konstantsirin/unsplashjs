import React from 'react';

import disableScroll from 'disable-scroll';

import PhotoDetailHeader from './PhotoDetailHeader/PhotoDetailHeader';
import PhotoDetailBody from './PhotoDetailBody/PhotoDetailBody';
import PhotoDetailFooter from './PhotoDetailFooter/PhotoDetailFooter';
import ButtonClose from '../Buttons/ButtonClose/ButtonClose';

import styles from '../../styles/PhotoDetail.module.css';
import { returnToBackWindow, returnToBack } from '../../supportFunctions';

class PhotoDetail extends React.Component {

    componentDidMount() {
        const { togglePhotoDetailStatus } = this.props;
        disableScroll.on();
        togglePhotoDetailStatus();
    };

    componentDidUpdate() {
        const { photoDetailStatus } = this.props;
        returnToBackWindow(photoDetailStatus);
    }

    componentWillUnmount() {
        const { togglePhotoDetailStatus } = this.props;
        togglePhotoDetailStatus();
        disableScroll.off();
    }

    render() {
        const { photo, toggleLikeUser } = this.props;
        if (photo.length !== 0 ) {
            const { photoDetailContainerWrapper, photoDetailContainer, photoDetailWrapper } = styles;
            const { isLiked, id, likes, authorName, createdPhoto, authorProfileLink, photoImgRegular, authorProfileAvatar } = photo[0];

            return (<>
                    <div
                        onClick={() => { returnToBack() }}
                        className={photoDetailContainerWrapper}
                    >
                        <div
                            className={ photoDetailContainer }
                            onClick={ (event) => { event.stopPropagation(); } }
                        >
                            <div
                                className={photoDetailWrapper}
                            >
                                <PhotoDetailHeader
                                    isLiked={ isLiked }
                                    id={ id }
                                    likes={ likes }
                                    toggleLikeUser = { toggleLikeUser }
                                />

                                <ButtonClose />

                                <PhotoDetailBody
                                    photoImgRegular={photoImgRegular}
                                />

                                <PhotoDetailFooter
                                    authorProfileLink={ authorProfileLink }
                                    authorName={ authorName }
                                    createdPhoto={ createdPhoto }
                                    authorProfileAvatar={ authorProfileAvatar }
                                />
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

export default PhotoDetail;
