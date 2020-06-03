import React from 'react';
import unsplashLogo from '../../assets/images/unsplash_logo.svg';
import styles from './Header.module.css';

class Header extends React.Component {

    render() {
        return (<div className={styles.headerBlock}>
            <img className={styles.headerLogo} src={unsplashLogo} alt="Логотип Unsplash" />
            <span className={styles.headerText}>Unsplash API Connect</span>
        </div>)
    }
}

export default Header;