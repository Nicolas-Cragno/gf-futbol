import React from 'react';
import "../assets/css/ShortItem.css";
import LongImg from './LongImg';

import { Container, Row, Col } from 'react-bootstrap';


export default function ShortItem(props) {
    const {img, title, txt, info, data} = props;
  return (
    <div className='short-item'>
      <Container>
        <Row>
            <Col md={4}>
                <img src={img} alt='' className='short-item-img'></img>
            </Col>
            <Col md={8} >
                <h2 className='short-item-txt'>{title}</h2>
                <h6 className='short-item-txt'>{txt}</h6>
                <h6 className='short-item-txt'>{info}</h6>
                <p className='short-item-txt'>{data}</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
