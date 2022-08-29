import React from 'react';
import {Link} from 'react-router-dom'; 
import ImageCard from './ImageCard';
import Collection from '../data/Collection.json';

export default function Gallery() {
    return (
        <div className='img__gallery'>
            {Collection.map(token => (
                <ImageCard 
                    img={token.imgSrc}
                    name={token.imgName}
                    // url="/token"
                />
            ))}
        </div>
    );
}

