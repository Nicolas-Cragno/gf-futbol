import React from 'react';
import '../assets/css/InfoTxt.css';
import { Container, Row, Col } from 'react-bootstrap';
import LongImg from './LongImg';


export default function InfoTxt(props) {
    const {title, txt, img} = props;
  return (
    <div className='info-txt'>
    <Container>
        <Row>
            <Col xs={12} className='info-txt-content'> {/* original */}
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src={img} className='info-txt-img'></img>
                        </Col> 
                        <Col md={8}>
                            <Container>
                                <Row>
                                    <Col xs={12} className='info-txt-title'>
                                        <h2 className='info-txt-h2'>{title}</h2>
                                    </Col>
                                    <Col xs={12} className='info-txt-txt'>
                                        <h6 className='info-txt-h6'>{txt}</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>   
                    </Row>
                </Container>
            </Col>
            <Col xs={12} className='info-txt-below1000'> {/* para paginas menores a 1000px */}
                <Container>
                    <Row>
                        <Col md={12}>
                            <Container>
                                <Row>
                                    <Col xs={12} className='info-txt-title'>
                                        <h2 className='info-txt-h2'>{title}</h2>
                                    </Col>
                                    <Col xs={12} className='info-txt-txt'>
                                        <h6 className='info-txt-h6'>{txt}</h6>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>   
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
</div>
  )
}
