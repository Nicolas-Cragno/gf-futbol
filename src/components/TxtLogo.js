import React from 'react';
import '../assets/css/Img.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgLogo from './ImgLogo';

export default function TxtLogo(props) {
    const {img, title, txt, link, target} = props;
  return (
    <div className='txt-logo'>
        <Link to={link} target={target} className='link'>
            <Container>
                <Row>
                    <Col md={6} className='column-left'>
                        <ImgLogo
                            img={img} 
                            link={link} 
                            target={target}
                        ></ImgLogo>
                    </Col>
                    <Col md={6} className='column-right txt img-txt'>
                        <h1 className='txt-logo-title'>{title}</h1>
                        <h2 className='txt-logo-txt'>{txt}</h2>
                    </Col>
                </Row>
            </Container>
        </Link>
    </div>
  )
}
