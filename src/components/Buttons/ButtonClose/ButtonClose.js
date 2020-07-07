import React from 'react';

import {return_to_back} from '../../../supportFunctions';

import styles from './ButtonClose.module.css';

const ButtonClose = () => {
    const {photoDetailClose} = styles;

    return (
        <button className={photoDetailClose} onClick={() => {return_to_back()}} aria-label="Close">
        </button>
    )

}

export default ButtonClose;