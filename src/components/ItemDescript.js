import React from 'react';
import '../assets/css/ItemDescript.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function ItemDescript(props) {
    const {img, title, txt1, txt2} = props;
  return (
    <div className='item-descript'>
        <Container>
            <Row>
                {/*
                <Col md={2} className='item-descript-left'>
                </Col>
                */}
                <Col md={12} className='item-descript-right'>
                    <Container>
                        <Row>
                            <Col xs={12} className='item-descript-top'>
                                <Container>
                                    <Row>
                                        <Col md={2}>
                                            <img src={img} className='item-descript-img'></img>
                                        </Col>
                                        <Col md={10} className='item-txt-left'>
                                            <h4 className='item-descript-txt1'>{title}</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            {/*
                            <Col xs={12}>
                                <h5 className='item-descript-txt2'>{txt1}</h5>
                            </Col>
                             */}
                        </Row>
                    </Container>
                </Col>
                <Col xs={12} className='item-descript-bottom'>
                    <h6 className='item-descript-txt3'>{txt2}</h6>
                </Col>
            </Row>
        </Container>  
    </div>
  )
}
