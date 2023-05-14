import React from 'react';
import '../../App.css';
//components
import Achievements from '../utilities/progress/Achievements';
import Plant from '../utilities/progress/Plant';
import ExperienceBar from '../utilities/progress/ExperienceBar';
import Footer from '../utilities/extras/Footer';

function Progress() {
  return (
    <div>
      <h1 className='progress'>Progress</h1>
      <Plant />
      <ExperienceBar />
      <Achievements />
      {/* <StoreFront /> */}
      <Footer />
    </div>
  );
}

export default Progress;