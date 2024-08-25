import React from 'react';
import Header from './Header';
import Contact from '../containers/Contact';

export default function Layout(props) {
    const { children } = props;
  return (
    <>
      <Header></Header>
      { children }
      <Contact></Contact>
    </>
  )
}
