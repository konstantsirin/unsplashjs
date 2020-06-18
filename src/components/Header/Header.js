import React from 'react';
import unsplashLogo from '../../assets/images/unsplash_logo.svg';
import styles from './Header.module.css';

class Header extends React.Component {
    render() {
        const {headerBlock, headerLogo, headerText} = styles;

        return (<div className={headerBlock}>
            <img className={headerLogo} src={unsplashLogo} alt="Логотип Unsplash" />
            <span className={headerText}>Unsplash API Connect</span>
        </div>)
    }
}

export default Header;