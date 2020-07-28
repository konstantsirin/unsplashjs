import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from '../../../styles/UnsplashAppItem.module.css';

class UnsplashAppItemBody extends React.Component {

    render() {

        const { galleryItemImageBlock, galleryItemImage } = styles;
        const { photoImgSmall, id } = this.props;
        const PATH = `/${id}`;


        return(
            <NavLink to={PATH}>
                <div className={ galleryItemImageBlock }>
                    <img className={ galleryItemImage }
                         src={ photoImgSmall }
                         alt='Изображение'/>
                </div>
            </NavLink>
        )
    }
}

export default UnsplashAppItemBody;