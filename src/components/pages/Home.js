import React from 'react';
import '../../App.css';
import Cards from '../utilities/Cards';
import HeroSection from '../utilities/HeroSection';
import Footer from '../utilities/Footer';

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
