import React from 'react';
import '../assets/css/News.css';
import Img1 from '../assets/statics/GameImg1.png';
import Img2 from '../assets/statics/GameImg2.png';
import Img3 from '../assets/statics/GameImg3.png';
import ImgMap from '../assets/statics/LogoMap.png';
import ImgFace1 from '../assets/statics/PabloFidani.png';
import ImgFace2 from '../assets/statics/PabloFidani.png';
import { Container, Row, Col, Carousel, ExampleCarouselImage } from 'react-bootstrap';
import NewsItem from '../components/NewsItem';
import NewsAlertItem from '../components/NewsAlertItem';
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";



export default function News() {
  return (
    <div className='pages news-page'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <NewsItem
            img={Img1}
            date={'21 de julio de 2024'}
            title1={'GANÓ'}
            title2={'BURZACO'}
            txt={'A pesar de haber empezado abajo, el negro pudo afirmarse y dar vuelta el partido. Se impuso por 2-1 ante un duro rival.'}
            words={'"Estamos contentos por la victoria, pero debemos mejorar algunos aspectos."'}
            imgface={ImgFace1}
            name={'Pablo Fidani'}
            description={'Entrenador de GF Burzaco'}
          ></NewsItem>
          {/* 
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          */}
        </Carousel.Item>
        <Carousel.Item>
          <NewsItem
          img={Img2}
          date={'21 de julio de 2024'}
          title1={'QUEDARON'}
          title2={'A UN PASO'}
          txt={'Gran partido de las chicas de Burzaco, en un partido para el infarto cayeron ante su rival en su primera final.'}
          words={'"Es duro perder así, pero este grupo da para mucho más y lo sabemos."'}
          imgface={ImgFace2}
          name={'Pablo Fidani'}
          description={'Entrenador de GF Burzaco'}
          ></NewsItem>
          {/*
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          */}
        </Carousel.Item>
        <Carousel.Item>
          <NewsItem
            img={Img3}
            date={'24 de julio de 2024 | 18:40 hs'}
            title1={'PRUEBA DE'}
            title2={'JUGADORES'}
            txt={'Este miércoles 24 probamos jugadores para nuestro plantel de fútbol masculino. Acercate con la indumentaria adecuada.'}
            words={'INDUMENTARIA: Botines, short y medias de fútbol.'}
            imgface={ImgMap}
            name={'Predio GF Burzaco | '}
            description={'Floresta'}
            imglink={'https://www.google.com.ar/maps/place/Instituto+Cultural+Y+Deportivo+Luz+Y+Fuerza/@-34.6255525,-58.4924532,19.21z/data=!4m6!3m5!1s0x95bcc9c6b75826ed:0x709bd790c0f08727!8m2!3d-34.625613!4d-58.4926002!16s%2Fg%2F11c7hb40t3?entry=tts&g_ep=EgoyMDI0MDcxNy4wKgBIAVAD'}
            imgtarget={'_blank'}
          ></NewsItem>
        </Carousel.Item>
        {/* 
        <Carousel.Item>
          <NewsAlertItem
          img={Img3}
          date={'24 de julio de 2024 | 18:40 hs'}
          title1={'PRUEBA DE'}
          title2={'JUGADORES'}
          txt={'Este miércoles 24 probamos jugadores para nuestro plantel de fútbol masculino. Acercate con la indumentaria adecuada (botines, short y medias de fútbol.'}
          imglocation={ImgMap}
          mapslocation={'https://www.google.com.ar/maps/place/Instituto+Cultural+Y+Deportivo+Luz+Y+Fuerza/@-34.6255525,-58.4924532,19.21z/data=!4m6!3m5!1s0x95bcc9c6b75826ed:0x709bd790c0f08727!8m2!3d-34.625613!4d-58.4926002!16s%2Fg%2F11c7hb40t3?entry=tts&g_ep=EgoyMDI0MDcxNy4wKgBIAVAD'}
          location={'Remedios de Escalada de San Martín, Floresta | Predio GF Burzaco'}
          ></NewsAlertItem>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        */}
      </Carousel>
    </div>
  )
}
