import React from 'react';
import '../assets/css/LinksBar.css';
import ImgLogo from './ImgLogo';

export default function LinksBar(props) {
    const {img1, link1, img2, link2, img3, link3, img4, link4, target} = props;
  return (
    <div className='links-bar'>
        <ImgLogo
        img={img1}
        link={link1}
        target={target}
        ></ImgLogo>
        <ImgLogo
        img={img2}
        link={link2}
        target={target}
        ></ImgLogo>
        <ImgLogo
        img={img3}
        link={link3}
        target={target}
        ></ImgLogo>
        {/* 
        <ImgLogo
        img={img4}
        link={link4}
        target={target}
        ></ImgLogo>
        */}
    </div>
  )
}
