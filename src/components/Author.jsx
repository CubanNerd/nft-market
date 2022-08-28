import React from 'react';
import Logo from '../assets/images/logo.svg'

export default function Author() {
    return(
        <div className="container">
            <div className="artist__name">
                By Cuban Nerd
            </div>
            <div className="artist__logo">
                <img src={Logo} alt="90M Logo" />
            </div>
            <div className="artist__company">
                90M Studio
            </div>
        </div>
    );
}