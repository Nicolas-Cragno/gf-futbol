import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';

export default function NavBar() {
  return (
    <div>
        <ul className='navbar-ul'>
            <Link to={'/'} className='link'>
            <li className='navbar-li'>
                MARCA
            </li>
            </Link>
            <Link to={'/'} className='link'>
            <li className='navbar-li'>
                NOSOTROS
            </li>
            </Link>
            <Link to={'/'} className='link'>
            <li className='navbar-li'>
                GRUPOS
            </li>
            </Link>
        </ul>
    </div>
  )
}
