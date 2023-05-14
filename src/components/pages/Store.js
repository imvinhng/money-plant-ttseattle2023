import React from 'react';
import '../../App.css';
//components
import StoreFront from '../utilities/StoreFront';
import Footer from '../utilities/Footer';


export default function Store() {
  return (
    <>
      <h1 className='store'>STORE</h1>
      <StoreFront />
      <Footer />
    </>
  );
}
