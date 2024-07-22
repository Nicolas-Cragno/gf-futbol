import React from 'react';
import '../assets/css/LongBar.css';
import ItemBar from './ItemBar';
import LogoTraining from '../assets/statics/LogoTrainning.png';
import LogoFutbol from '../assets/statics/LogoFutbol.png';

export default function LongBar() {
  return (
    <div className='long-bar'>
      <ItemBar
      img={LogoTraining}
      title={'ENTRENAMIENTO'}
      ></ItemBar>
      <ItemBar
      img={LogoFutbol}
      title={'MASCULINO'}
      ></ItemBar>
      <ItemBar
      img={LogoTraining}
      title={'FEMENINO'}
      ></ItemBar>
      <ItemBar
      img={LogoFutbol}
      title={'VESTÍ GF'}
      ></ItemBar>
    </div>
  )
}
