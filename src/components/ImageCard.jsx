import React from 'react';
import Image from '../assets/images/alpha1.png';

export default function ImageCard(props) {
    return (
        <div className="img__card">
            <img src={props.img} alt="Alpha 1" className="img__pic" />
            <p className="img__name">
                {props.name}
            </p>
        </div>
    );
}