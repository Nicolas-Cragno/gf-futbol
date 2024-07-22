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
      link1={''}
      red2={LogoInstagram}
      link2={''}
      red3={LogoYoutube}
      link3={''}
      target={''}
      ></TxtDescription>
    </div>
  )
}
