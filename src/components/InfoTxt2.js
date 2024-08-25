import React from 'react';
import '../assets/css/InfoTxt.css';
import { Container, Row, Col } from 'react-bootstrap';


export default function InfoTxt2(props) {
    const {title} = props;
  return (
    <div className='info-txt2'>
    <Container>
        <Row>
            <Col xs={12} className='info-txt-title'>
                <h2 className='info-txt-h2'>{title}</h2>
            </Col>
        </Row>
    </Container>


    
</div>
  )
}
