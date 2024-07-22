import React from 'react';
import '../assets/css/News.css';
import LongImg from '../components/LongImg';
import NewTxt from '../components/NewTxt';
import ImgPrincipal from '../assets/statics/GameImg2.jpg';
import { Container, Row, Col } from 'react-bootstrap';

export default function News() {
  return (
    <div className='pages news-page'>
      <Container>
        <Row>
          <Col md={6} className='news-page-left'>
            <LongImg
            img={ImgPrincipal}
            ></LongImg>
          </Col>
          <Col md={6} className='news-page-right'>
            <NewTxt
            date={'21 de julio de 2024'}
            title={'GANO BURZACO'}
            txt={'A pesar de haber empezado abajo, el negro pudo afirmarse y dar vuelta el partido. Se impuso por 2-1 ante un duro rival.'}
            words={'"Estamos contentos por la victoria, pero debemos mejorar algunos aspectos."'}
            name={'Pablo Fidani'}
            description={'Entrenador de GF Burzaco'}
            ></NewTxt>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
