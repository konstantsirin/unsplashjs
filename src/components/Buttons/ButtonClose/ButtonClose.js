import React from 'react';

import { returnToBack } from '../../../supportFunctions';

import styles from '../../../styles/ButtonClose.module.css';

const ButtonClose = () => {
    const { photoDetailClose } = styles;

    return (
        <button
            className={ photoDetailClose }
            onClick={() => { returnToBack() }}
            aria-label='Close'>
        </button>
    )

}

export default ButtonClose;