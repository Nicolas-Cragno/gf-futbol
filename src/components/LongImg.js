import React from 'react';
import '../assets/css/LongImg.css';
import { Link } from 'react-router-dom';

export default function LongImg(props) {
    const {img, link, target} = props;
  return (
    <div className='long-img'>
        <Link to={link} target={target}>
            <img src={img} alt='' className='long-img-img'></img>      
        </Link>
    </div>
  )
}
