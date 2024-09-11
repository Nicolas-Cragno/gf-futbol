import React from 'react';
import '../assets/css/Contact.css';
import TxtDescription from '../components/TxtDescription';
import LogoWpp from '../assets/statics/LogoWpp.png';
import LogoInstagram from '../assets/statics/LogoInstagram.png';
import LogoYoutube from '../assets/statics/LogoYoutube.png';

export default function Contact() {
  return (
    <div className='pages contact-page'>
      <TxtDescription
      address={'Remedios de Escalada de San Martin 4202, Floresta, C.A.B.A.'}
      phone={'+54 9 11 3860 9659'}
      mail={'gffutboltactico@gmail.com'}
      red1={LogoWpp}
      url1={'https://maps.app.goo.gl/ubwSXgzU8p9BdYTj7'}
      red2={LogoInstagram}
      url2={'https://www.instagram.com/gffutbol/'}
      red3={LogoYoutube}
      url3={'https://www.youtube.com/@gffutbol1570'}
      target={'_blank'}
      ></TxtDescription>
    </div>
  )
}
