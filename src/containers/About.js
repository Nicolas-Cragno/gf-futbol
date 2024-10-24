import React from 'react';
import '../assets/css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import LongImg from '../components/LongImg';
import InfoTxt from '../components/InfoTxt';
import Contact from './Contact';
import ImgBack from '../assets/statics/AboutBackground.png';
import ImgAbout from '../assets/statics/GFred.png';

export default function About() {
  return (
    <div className='pages about-page'>
        <Container>
        <Row>
          <Col xs={12} className='about-img'></Col>
          <Col xs={12} className='about-txt'>
            <InfoTxt
                title={"Sobre nosotros..."}
                /*
                txt={"GF Predio es un espacio pensado para el jugador amateur que quiere entrenar y competir seriamente. Brindamos sesiones de entrenamientos de manera profesional, con los mejores profesores y los materiales adecuados para la práctica del deporte que tanto amamos. También buscamos competir en el mejor nivel posible. Te invitamos a compartir esto que tanto nos apasiona, SUMATE!"}
                */
                txt='En GF Predio creamos un espacio pensado para el jugador amateur que quiere entrenar y competir con dedicación. Contamos con entrenadores altamente capacitados y el mejor equipamiento para que puedas desarrollar tu potencial deportivo al máximo. Nuestro objetivo es competir al más alto nivel, siempre con el entusiasmo que nos motiva. ¡Unite a nuestra pasión por este hermoso deporte y viví la experiencia de entrenar como un profesional! ¡Sumate!'
                img={ImgAbout}
            ></InfoTxt>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
