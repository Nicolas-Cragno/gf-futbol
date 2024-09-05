import React from 'react';
import '../assets/css/NewTxt.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImgLogo from './ImgLogo';

export default function NewTxt(props) {
    const {date, title1, title2, txt, words, img, imgface, imglink, imgtarget, name, description, imglocation, location, hour} = props;
  return (
    <div className='new-txt'>
        <Container>
            <Row>
                <Col xs={12}>
                    <header className='new-txt-header'>{date}</header>
                </Col>
                <Col xs={12} classNname='new-txt-h2-block'>
                    <h2 className='new-txt-h2'>{title1}</h2>
                </Col>
                <Col xs={12} className='new-txt-h1-block'>
                    <h1 className='new-txt-h1'>{title2}</h1>
                </Col>
                <Col xs={12} className='new-txt-box'>
                    <h6 className='new-txt-h6'>{txt}</h6>
                </Col>
                {/* ELEMENTOS UNICOS PARA NewsItem (Comentarios para noticias) UNIFICADO CON LOCACIONES*/}
                {/* descartados por el momento
                <Col xs={12} className='new-txt-footer-box'>
                    <Container className='new-txt-footer'>
                        <Row> 
                            <Col xs={12} className='new-txt-p-block'>
                                <p className='new-txt-p'>{words}</p>
                            </Col>
                            <Col md={2} className='new-txt-footer-left'>
                                <ImgLogo
                                img={imgface}
                                link={imglink}
                                target={imgtarget}
                                ></ImgLogo>
                            </Col>
                            <Col md={10} className='new-txt-footer-right'>
                                <footer className='new-txt-footer txt'>{name} | {description} </footer>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                */}
                {/* ELEMENTOS UNICOS PARA NewsAlertItem (Información para enventos puntuales) SIN USO POR EL MOMENTO
                <Col xs={12} className='new-txt-footer-box'>
                    <Container className='new-txt-footer'>
                        <Row>
                            <Col md={2} className='new-txt-footer-left'>
                                <ImgLogo
                                img={imglocation}
                                ></ImgLogo>
                            </Col>
                            <Col md={10} className='new-txt-footer-right'>
                                <footer className='new-txt-footer txt'>{location}</footer>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                */}

            </Row>
        </Container>
    </div>
  )
}
