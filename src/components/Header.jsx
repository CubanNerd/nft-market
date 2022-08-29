import React from 'react';
import NavBar from './NavBar';
import CollectionLogo from '../assets/images/collectionLogo.png'

export default function Header() {
    return(
        <header className='header_container'>
            <NavBar />
            <div className='header__logo'>
                <img src={CollectionLogo} alt="Natur Dreanscapes Collection Logo" className='logo'/>
            </div>
            <div className="container">
                <div className="artist__name">
                    By Cuban Nerd
                </div>
                <div className="artist__company">
                    90M Studio
                </div>
            </div>
        </header>
    );
}