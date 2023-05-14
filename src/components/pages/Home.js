import React from 'react';
import '../../App.css';
//components
import Cards from '../utilities/home/Cards';
import HeroSection from '../utilities/home/HeroSection';
import Footer from '../utilities/extras/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
