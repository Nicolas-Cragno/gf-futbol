import React from 'react';
import '../assets/css/Uniform.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Uniform() {
  return (
    <div className='pages uniform-page'> 
      <Container>
        <Row>
            {/* ------------------------------------- - - - - IMAGEN PRESENTACIÓN ↓↓*/}
            <Col xs={12} className='uniform-img'></Col> 
        </Row>
      </Container>
    </div>
  )
}
