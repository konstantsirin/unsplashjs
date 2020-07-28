import React from 'react';

import styles from '../../styles/Preloader.module.css';
import preloader from '../../assets/images/preloader.gif';

const Preloader = (props) => {
    const { isFetching } = props;
    const { preloaderBlock, preloaderBlockWrapper, preloaderImg } = styles;

    if(isFetching) {
        return (
            <div
                className={ preloaderBlock }
            >
                <div
                    className={ preloaderBlockWrapper }
                >
                    <img
                        className={ preloaderImg }
                        src={ preloader }
                        alt='Загрузка'
                    />
                </div>
            </div>
        )
    } else {
        return <></>;
    }
}

export default Preloader;