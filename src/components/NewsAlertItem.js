import React from 'react';
import '../assets/css/News.css';
import LongImg from './LongImg';
import NewsAlert from './NewsAlert';
import { Container, Row, Col } from 'react-bootstrap';

export default function NewsAlertItem(props) {
    const {img, date, title1, title2, txt, imglocation, mapslocation, location} = props;
  return (
    <div className='pages news-page'>
      <Container>
        <Row>
          <Col md={6} className='news-page-left'>
            <LongImg
            img={img}
            ></LongImg>
          </Col>
          <Col md={6} className='news-page-right'>
            <NewsAlert
            imglocation={imglocation}
            date={date}
            title1={title1}
            title2={title2}
            txt={txt}
            location={location}
            mapslocation={mapslocation}
            ></NewsAlert>
          </Col>
          <Col md={12} className='news-page-center'> {/* USO SOLO CUANDO SE BLOQUEA EL NEWS-PAGE-LEFT */}
            <NewsAlert
            imglocation={imglocation}
            date={date}
            title1={title1}
            title2={title2}
            txt={txt}
            location={location}
            mapslocation={mapslocation}
            ></NewsAlert>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
