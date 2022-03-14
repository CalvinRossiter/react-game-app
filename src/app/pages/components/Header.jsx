import React from 'react';
import { Link } from 'react-router-dom';

import '../../styling/header.css';
// import styles from '../../styling/header.scss';

const Header = () => {
    return(
        <div className='headerTitleContainer'>
            <Link to='/home' className='appName'>
                <h1 id='headerTitle'>tAfA</h1>
            </Link>
            <h5 id='headerSubtitle'>The App for Apps</h5>
        </div>
    );
};

export default Header;