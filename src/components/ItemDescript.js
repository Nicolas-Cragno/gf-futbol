import React from 'react';
import '../assets/css/ItemDescript.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function ItemDescript(props) {
    const {img, title, txt1, txt2} = props;
  return (
    <div className='item-descript'>
        <Container>
            <Row>
                <Col md={4} className='item-descript-left'>
                    <img src={img} className='item-descript-img'></img>
                </Col>
                <Col md={8} className='item-descript-right'>
                    <Container>
                        <Row>
                            <Col xs={12}>
                            <h4 className='item-descript-title'>{title}</h4>
                            </Col>
                            <Col xs={12}>
                            <h6 className='item-descript-txt1'>{txt1}</h6>
                            </Col>
                            <Col xs={12}>
                            <h6 className='item-descript-txt1'>{txt2}</h6>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>  
    </div>
  )
}
