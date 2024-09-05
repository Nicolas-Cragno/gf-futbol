import React from 'react';
import '../assets/css/Teams.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemDescript from '../components/ItemDescript';
import Logo from '../assets/statics/GFred.png';
import LogoEntrenamiento from '../assets/statics/LogoTrainning.png';
/*
import LongImg from '../components/LongImg';
import InfoTxt2 from '../components/InfoTxt2';
import Contact from './Contact';
import ImgBack from '../assets/statics/AboutBackground.png';
import ShortItem from '../components/ShortItem';
import ImgBurzaco from '../assets/statics/NoImage.png';
*/

export default function Teams() {
  return (
    <div className='pages teams-page'>
        <Container>
        <Row>
          {/* ------------------------------------- - - - - IMAGEN PRESENTACIÓN ↓↓*/}
          <Col xs={12} className='teams-img'></Col> 
          {/* ------------------------------------- - - - - FUTBOL MASCULINO ↓↓*/}
          <Col md={4} className='teams-txt-box'> 
            <h3 className='teams-txt-h3'>Masculino</h3>
            <h2 className='teams-txt-h2'>Fútbol 11</h2>
            <ItemDescript
            img={Logo}
            title={'GF Burzaco'}
            txt2={'Lunes y miércoles 19:45 hs'}
            ></ItemDescript>
            <ItemDescript
            img={Logo}
            title={'GF Buenos Aires'}
            txt2={'Lunes y miércoles 19:45 hs'}
            ></ItemDescript>
          </Col>
          {/* ------------------------------------- - - - - FUTBOL FEMENINO ↓↓*/}
          <Col md={4} className='teams-txt-box'> 
            <h3 className='teams-txt-h3'>Femenino</h3>
            <h2 className='teams-txt-h2'>Fútbol 5</h2>
            <ItemDescript
            img={Logo}
            title={'GF Santa Rita'}
            txt2={'Jueves 20:45 hs'}
            ></ItemDescript>
          </Col>
          {/* ------------------------------------- - - - - ENTRENAMIENTOS ↓↓  */}
          <Col md={4} className='teams-txt-box'>
            <h3 className='teams-txt-h3'>Entrenamiento Libre</h3>
            <h2 className='teams-txt-h2'>2 grupos</h2>
            <ItemDescript
              img={LogoEntrenamiento}
              title={'F11 Masculino'}
              txt2={'Lunes y miércoles 19:45 hs'}
            ></ItemDescript>
            <ItemDescript
              img={LogoEntrenamiento}
              title={'F5 Femenino'}
              txt2={'Jueves 20:45 hs'}
            ></ItemDescript>
          </Col>
         
        </Row>
      </Container>
    </div>
  )
}
