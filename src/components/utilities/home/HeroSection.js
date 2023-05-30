import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../../../App';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>PLANTING THE SEEDS</h1>
      <p>Set goals and watch your garden grow</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LOG IN
        </Button>
      </div>
      <div className ="hero-img"><img src="images/background/home-panda.png" width="240"/></div>
    </div>
  );
}

export default HeroSection;
