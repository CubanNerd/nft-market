import React from 'react';
import SocialLinks from './SocialLinks';
import Wallet from './Wallet';

export default function NavBar() {
    return (
        <nav className='navbar__container'>
            <SocialLinks />
            <Wallet />
        </nav>
    );
}