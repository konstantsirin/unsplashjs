import React from 'react';
import styles from './ButtonClose.module.css';
import {return_to_back} from '../../../supportFunctions';


const ButtonClose = () => {
    const {photoDetailClose} = styles;

    return (
        <button className={photoDetailClose} onClick={() => {return_to_back()}} aria-label="Close">
        </button>
    )

}

export default ButtonClose;