import React from 'react';
import '../../App.css';
//components
import Footer from '../utilities/extras/Footer';
//css
import '../utilities/bills/Bills.css';

export default function Bills() {
  return (
    <div>
      <h1 className='bills'>BILLS</h1>
      <div className='piechart'>Pie Chart goes here</div>
      <Footer />
    </div>
  );
}
