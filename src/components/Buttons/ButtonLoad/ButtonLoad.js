import React from 'react';

import styles from '../../../styles/ButtonLoad.module.css';

const ButtonLoad = (props) => {
    const { currentPage, isFetching, getPhoto } = props;
    const { loadBtn } = styles;
    return (
        <div>
            <button className={ loadBtn } onClick={(ev) => {getPhoto(currentPage);}} disabled={isFetching}>ЕЩЕ ФОТО</button>
        </div>
        )

}

export default ButtonLoad;
