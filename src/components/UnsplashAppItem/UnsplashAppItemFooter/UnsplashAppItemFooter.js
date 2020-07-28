import React from 'react';

import styles from '../../../styles/UnsplashAppItem.module.css';

import PhotoDescription from '../../PhotoContent/PhotoDescription/PhotoDescription';

class UnsplashAppItemFooter extends React.Component {

    render() {
        const { galleryItemFooter } = styles;
        const { authorName, createdPhoto, authorProfileLink, authorProfileAvatar } = this.props;

        return(
            <footer
                className={ galleryItemFooter }
            >
                <PhotoDescription
                    authorProfileLink={ authorProfileLink }
                    authorName={ authorName }
                    createdPhoto={ createdPhoto }
                    authorProfileAvatar={ authorProfileAvatar }
                />
            </footer>

        )
    }
}

export default UnsplashAppItemFooter;