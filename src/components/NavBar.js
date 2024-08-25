import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';

export default function NavBar() {
  return (
    <div>
        <ul className='navbar-ul'>
            <Link to={'/nosotros'} className='link'>
            <li className='navbar-li'>
                NOSOTROS
            </li>
            </Link>
            <Link to={'/selectivos'} className='link'>
            <li className='navbar-li'>
                SELECTIVOS
            </li>
            </Link>
            <Link to={'/indumentaria'} className='link'>
            <li className='navbar-li'>
                ROPA
            </li>
            </Link>
        </ul>
    </div>
  )
}
