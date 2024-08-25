import React from 'react';
import '../assets/css/Home.css';
import Feed from './Feed';
import News from './News';
import Contact from './Contact';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <div className='pages home-page'>
      <Container>
        <Row>
          <Col xs={12}>
            <Feed></Feed>
          </Col>
          <Col xs={12}>
            <News></News>
          </Col>

        </Row>
      </Container>
    </div>
  )
}
