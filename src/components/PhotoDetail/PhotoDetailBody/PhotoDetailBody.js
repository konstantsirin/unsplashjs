import React from 'react';

import styles from '../../../styles/PhotoDetail.module.css';

class PhotoDetailBody extends React.Component {

    render() {
        const { photoDetailImage } = styles;
        const { photoImgRegular } = this.props;

        return (
            <span>
                <img
                    className={ photoDetailImage }
                    src={ photoImgRegular }
                    alt='Изображение'
                />
            </span>
        );
    }
}

export default PhotoDetailBody;