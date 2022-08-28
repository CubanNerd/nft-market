import React from 'react';
import {Link} from 'react-router-dom'; 
// import ImageCard from './ImageCard';
import alpha1 from '../assets/images/alpha1.png';
import alpha2 from '../assets/images/alpha2.png';
import alpha3 from '../assets/images/alpha3.png';
import alpha4 from '../assets/images/alpha4.png';
import alpha5 from '../assets/images/alpha5.png';
import alpha6 from '../assets/images/alpha6.png';
import alpha7 from '../assets/images/alpha7.png';
import alpha8 from '../assets/images/alpha8.png';
import alpha9 from '../assets/images/alpha9.png';
import alpha10 from '../assets/images/alpha10.png';
import alpha11 from '../assets/images/alpha11.png';
import alpha12 from '../assets/images/alpha12.png';
import alpha13 from '../assets/images/alpha13.png';
import alpha14 from '../assets/images/alpha14.png';
import alpha15 from '../assets/images/alpha15.png';


let data =[
    {
        id: 1,
        imgSrc: alpha1,
        imgName: 'α1',
    },
    {
        id: 2,
        imgSrc: alpha2,
        imgName: 'α2',
    },
    {
        id: 3,
        imgSrc: alpha3,
        imgName: 'α3',
    },
    {
        id: 4,
        imgSrc: alpha4,
        imgName: 'α4',
    },
    {
        id: 5,
        imgSrc: alpha5,
        imgName: 'α5',
    },
    {
        id: 6,
        imgSrc: alpha6,
        imgName: 'α6',
    },
    {
        id: 7,
        imgSrc: alpha7,
        imgName: 'α7',
    },
    {
        id: 8,
        imgSrc: alpha8,
        imgName: 'α8',
    },
    {
        id: 9,
        imgSrc: alpha9,
        imgName: 'α9',
    },
    {
        id: 10,
        imgSrc: alpha10,
        imgName: 'α10',
    },
    {
        id: 11,
        imgSrc: alpha11,
        imgName: 'α11',
    },
    {
        id: 12,
        imgSrc: alpha12,
        imgName: 'α12',
    },
    {
        id: 13,
        imgSrc: alpha13,
        imgName: 'α13',
    },
    {
        id: 14,
        imgSrc: alpha14,
        imgName: 'α14',
    },
    {
        id: 15,
        imgSrc: alpha15,
        imgName: 'α15',
    }
]

export default function Gallery() {
    return (  
        <div className='img__gallery'>
            {data.map((item, index)=>{
                return(
                    <div key={index} className="img__card">
                        <Link to="/token">
                            <img src={item.imgSrc} className='img__pic' />
                        </Link>
                        <p className="img__name">
                            {item.imgName}
                        </p>
                    </div>
                )
            })}
            {/* <ImageCard /> */}
        </div>
    );
}

