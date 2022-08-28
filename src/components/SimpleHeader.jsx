import React from 'react';
import NavBar from './NavBar';
import CollectionLogo from '../assets/images/collectionLogo.png'

export default function SimpleHeader() {
    return(
        <header className='simpleheader_container'>
            <NavBar />
            <div className='header__logo'>
                <img src={CollectionLogo} alt="Natur Dreanscapes Collection Logo" />
            </div>
        </header>
    );
}