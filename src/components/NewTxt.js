import React from 'react';
import '../assets/css/NewTxt.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImgFace from '../assets/statics/PabloFidani.png';
import ImgLogo from './ImgLogo';

export default function NewTxt(props) {
    const {date, title, txt, words, img, name, description} = props;
  return (
    <div className='new-txt'>
        <Container>
            <Row>
                <Col xs={12}>
                    <header className='new-txt-header'>{date}</header>
                </Col>
                <Col xs={12} className='new-txt-h1-block'>
                    <h1 className='new-txt-h1'>{title}</h1>
                </Col>
                <Col xs={12}>
                    <h6 className='new-txt-h6'>{txt}</h6>
                </Col>
                <Col xs={12} className='new-txt-p-block'>
                    <p className='new-txt-p'>{words}</p>
                </Col>
                <Col xs={12}>
                    <Container className='new-txt-footer'>
                        <Row>
                            <Col md={2} className='new-txt-footer-left'>
                                <ImgLogo
                                img={ImgFace}
                                ></ImgLogo>
                            </Col>
                            <Col md={10} className='new-txt-footer-right'>
                                <footer className='new-txt-footer'>{name} | {description} </footer>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
