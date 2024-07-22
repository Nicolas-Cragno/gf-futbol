import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImgLogo from './ImgLogo';
import TxtLogo from './TxtLogo';
import LogoGF from '../assets/statics/LogoGF.png';
import LogoMap from '../assets/statics/LogoMap.png';
import LogoInstagram from '../assets/statics/LogoInstagram.png';
import LogoYoutube from '../assets/statics/LogoYoutube.png';

export default function HeaderOne() {
  return (
    <div className='header-one'>
      <Container>
        <Row>
            <Col md={3} className='header-left'>
                <ImgLogo
                img={LogoGF} 
                link={'/'} 
                ></ImgLogo>
            </Col>
            <Col md={9} className='header-right'>
                <TxtLogo
                img={LogoMap}
                title={'CABA (ARG)'} 
                txt={'Floresta'} 
                link={'https://maps.app.goo.gl/ubwSXgzU8p9BdYTj7'} 
                target={'_blank'}
                ></TxtLogo>
                 
                <TxtLogo
                img={LogoInstagram}
                title={'Instagram'} 
                txt={'Cuenta oficial'} 
                link={'https://www.instagram.com/gffutbol/'} 
                target={'_blank'}
                ></TxtLogo>

                <TxtLogo
                img={LogoYoutube}
                title={'Youtube'} 
                txt={'Cuenta oficial'} 
                link={'https://www.youtube.com/@gffutbol1570'} 
                target={'_blank'}
                ></TxtLogo>
                
            </Col>
        </Row>
      </Container>
    </div>
  )
}
