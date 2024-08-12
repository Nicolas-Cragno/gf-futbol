import React from 'react';
import '../assets/css/News.css';
import LongImg from './LongImg';
import NewTxt from './NewTxt';
import { Container, Row, Col } from 'react-bootstrap';

export default function NewsItem(props) {
    const {img, date, title1, title2, txt, words, imgface, imglink, imgtarget, name, description} = props;
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
            <NewTxt
            date={date}
            title1={title1}
            title2={title2}
            txt={txt}
            words={words}
            imgface={imgface}
            imglink={imglink}
            imgtarget={imgtarget}
            name={name}
            description={description}
            ></NewTxt>
          </Col>
          <Col md={12} className='news-page-center'> {/* USO SOLO CUANDO SE BLOQUEA EL NEWS-PAGE-LEFT */}
            <NewTxt
            date={date}
            title1={title1}
            title2={title2}
            txt={txt}
            words={words}
            imgface={imgface}
            imglink={imglink}
            imgtarget={imgtarget}
            name={name}
            description={description}
            ></NewTxt>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
