import React from 'react';
import '../../App.css';
//components
import StoreFront from '../utilities/store/StoreFront';
import Footer from '../utilities/extras/Footer';


export default function Store() {
  return (
    <>
      <h1 className='store'>STORE</h1>
      <StoreFront />
      <Footer />
    </>
  );
}
