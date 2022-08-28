import React from 'react';
import Image from '../assets/images/alpha1.png';

export default function ImageCard() {
    return (
        <div className="img__card">
            <img src={Image} alt="Alpha 1" className="img__pic" />
            <p className="img__name">
                α1
            </p>
        </div>
    );
}