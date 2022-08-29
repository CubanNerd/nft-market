import React from 'react';

export default function ImageCard(props) {
    return (
        <div className="img__card">
            <a href={props.url}>
                <img src={props.img} alt={props.description} className="img__pic" />
            </a>
            <p className="img__name">
                {props.name}
            </p>
        </div>
    );
}