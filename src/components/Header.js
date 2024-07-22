import React from 'react';
import { Container, Row,  Col } from 'react-bootstrap';
import '../assets/css/Header.css';
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';

export default function Header() {
  return (
    <div className='app-header'>
      <Container>
        <Row>
          <Col xs={12} className='app-header-top'>
            <HeaderOne></HeaderOne>
          </Col>
          <Col xs={12} className='app-header-bottom'>
            <HeaderTwo></HeaderTwo>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
