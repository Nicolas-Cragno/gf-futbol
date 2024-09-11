import React from 'react';
import '../assets/css/TxtDescription.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImgLogo from './ImgLogo.js';
import LogoMap from '../assets/statics/LogoMapWhite.png';
import LogoWpp from '../assets/statics/LogoWppWhite.png';
import LogoMail from '../assets/statics/LogoMsgWhite.png';
import LinksBar from './LinksBar.js';
import LogoWppColor from '../assets/statics/LogoWpp.png';
import LogoInstaColor from '../assets/statics/LogoInstagram.png';
import LogoYoutubeColor from '../assets/statics/LogoYoutube.png';

export default function TxtDescription(props) {
    const {address, phone, mail, red1, url1, red2, url2, red3, url3, red4, url4, target} = props;
  return (
    <div className='txt-description'>
        <Container>
            <Row>
                <Col xs={12} className='txt-description-block'>
                <ImgLogo
                img={LogoMap}
                ></ImgLogo>
                <p className='txt-description-p txt'>{address}</p>
                </Col>
                <Col xs={12} className='txt-description-block'>
                <ImgLogo
                img={LogoWpp}
                ></ImgLogo>
                <p className='txt-description-p txt'>{phone}</p>
                </Col>
                <Col xs={12} className='txt-description-block'>
                <ImgLogo
                img={LogoMail}
                ></ImgLogo>
                <p className='txt-description-p txt'>{mail}</p>
                </Col>
                <Col xs={12} className='txt-description-block'>
                    <LinksBar
                    img1={LogoWppColor}
                    link1={url1}
                    img2={LogoInstaColor}
                    link2={url2}
                    img3={LogoYoutubeColor}
                    link3={url3}
                    target={'_blank'}
                    ></LinksBar>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
