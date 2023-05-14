import React from 'react';
import '../../App.css';
//components
import Footer from '../utilities/extras/Footer';

export default function Bills() {
  return (
    <div>
      <h1 className='bills'>BILLS</h1>
      <h2>Coming Soon</h2>
      <p>How it works: Import your bills and view them here. For each bill paid, you receive currency to purchase seeds from the store.</p>
      <p>Grow lots of plants over time by practicing good money management habits!</p>
      <Footer />
    </div>
  );
}
