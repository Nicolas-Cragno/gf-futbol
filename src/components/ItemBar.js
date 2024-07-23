import React from 'react';

import ImgLogo from './ImgLogo.js';
import { Link } from 'react-router-dom';    

export default function ItemBar(props) {
    const {link, img, title, target} = props;
  return (
    <div className='item-bar txt'>
      <Link to={link} target={target} className='item-bar-link'>
        <ImgLogo
        img={img}
        ></ImgLogo>
        <h5 className='item-bar-title txt'>{title}</h5>
      </Link>
    </div>
  )
}
