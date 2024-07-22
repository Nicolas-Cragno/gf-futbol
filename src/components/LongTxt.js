import React from 'react';
import '../assets/css/LongTxt.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LongTxt(props) {
    const {txt1, txt2, btn_txt, link, target} = props;
  return (
    <div className='long-txt'>
      <Container>
              <Row>
                <Col xs={12}>
                  <h1 className='long-txt-txt'>{txt1}</h1>
                </Col>
                <Col xs={12}>
                  <h1 className='long-txt-txt'>{txt2}</h1>
                </Col>
                <Col xs={12}>
                  <Link to={link} target={target}>
                    <Button variant="danger" className='long-txt-btn'>{btn_txt}</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
    </div>
  )
}
