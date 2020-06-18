import React from 'react';
import styles from './Authorization.module.css';
import {onAuth} from './../../API/unsplashApi.js';
import { withRouter } from "react-router-dom";


const Authorization = (props) => {
    const {wrapper, authBlock, logo, authButton} = styles;

    return (<div className={wrapper}>
            <div className={authBlock}>
                <svg width="32" height="32" className={logo} aria-labelledby="unsplash-logo" aria-hidden="false">
                    <title id="unsplash-logo">
                        Unsplash Home
                    </title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                </svg>
                <button className={authButton} onClick={onAuth}>
                    Вход
                </button>
            </div>
        </div>
    )
};

export default withRouter(Authorization);