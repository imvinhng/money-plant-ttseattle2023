import React from 'react';
import StoreFront from '../utilities/StoreFront';
import Footer from '../utilities/Footer';
import '../../App.css';

export default function Store() {
  // return <h1 className='store'>STORE</h1>;

  return (
    <>
      <h1 className='store'>STORE</h1>
      <StoreFront />
      <Footer />
    </>
  );
}
