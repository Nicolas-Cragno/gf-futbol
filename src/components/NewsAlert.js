import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgLogo from './ImgLogo';

export default function NewsAlert(props) {
    const {date, title1, title2, txt, imglocation, mapslocation, location} = props;
  return (
    <div className='new-txt'>
        <Container>
            <Row>
                <Col xs={12}>
                    <header className='new-txt-header'>{date}</header>
                </Col>
                <Col xs={12} classNname='new-txt-h2-block'>
                    <h1 className='new-txt-h2'>{title1}</h1>
                </Col>
                <Col xs={12} className='new-txt-h1-block'>
                    <h1 className='new-txt-h1'>{title2}</h1>
                </Col>
                <Col xs={12} className='new-txt-box'>
                    <h6 className='new-txt-h6'>{txt}</h6>
                </Col>
                {/* ELEMENTOS UNICOS PARA NewsAlertItem (Información para enventos puntuales) */}
                <Col xs={12} className='new-txt-h6'>
                    <Container className='new-txt-footer'>
                        <Row>
                            <Col md={2} className='new-txt-footer-left'>
                                <Link to={mapslocation} target='_blank'>
                                    <ImgLogo
                                        img={imglocation}
                                    ></ImgLogo>
                                </Link>
                            </Col>
                            <Col md={10} className='new-txt-footer-right'>
                                <footer className='new-txt-footer txt'>{location}</footer>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
