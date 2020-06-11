import React from 'react';
import styles from "./ButtonClose.module.css";
import {returnToBack} from "../../../supportFunctions";


const ButtonClose = () => {
    return (
        <button className={styles.photoDetailClose} onClick={() => {returnToBack()}}>X</button>
    )

}

export default ButtonClose;