import React from 'react'
import '../assets/css/Feed.css';
import LongBar from '../components/LongBar.js';
import { Container, Row, Col } from 'react-bootstrap';
import LongTxt from '../components/LongTxt.js';

export default function Feed() {
  return (
    <div className='pages-principal feed-page'>
      <Container>
        <Row>
          <Col xs={6} className='feed-page-top'>
            <LongTxt
            txt1={'SUMATE A'}
            txt2={'GF FÚTBOL'}
            btn_txt={'INSCRIPCIÓN'}
            link={'https://wa.me/+5491138609659'} /* link a wpp de Pablo */
            target={'_blank'}
            ></LongTxt>
          </Col>
          <Col xs={12} className='feed-page-bottom'>
            <LongBar></LongBar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
