import React from 'react';
import styles from "./ButtonClose.module.css";
import {RETURN_TO_BACK} from "../../../supportFunctions";


const ButtonClose = () => {
    const {photoDetailClose} = styles;

    return (
        <button className={photoDetailClose} onClick={() => {RETURN_TO_BACK()}} aria-label="Close">
        </button>
    )

}

export default ButtonClose;