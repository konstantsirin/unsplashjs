import React from 'react';

import styles from '../../../styles/PhotoDetail.module.css';
import PhotoDescription from '../../PhotoContent/PhotoDescription/PhotoDescription';

class PhotoDetailFooter extends React.Component {

    render() {
        const { photoDetailFooter } = styles;
        const { authorProfileLink, authorName, createdPhoto, authorProfileAvatar} = this.props;

        return (
            <footer
                className={photoDetailFooter}
            >
                <PhotoDescription
                    authorProfileLink={ authorProfileLink }
                    authorName={ authorName }
                    createdPhoto={ createdPhoto }
                    authorProfileAvatar={ authorProfileAvatar }
                />
            </footer>
        );
    }
}

export default PhotoDetailFooter;