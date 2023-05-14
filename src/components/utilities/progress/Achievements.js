import React from 'react';
import './Achievements.css';
import CardItem from '../home/CardItem';

export default function Achievements() {
  return (
    <div>
      <h1 style={{margin:'20px'}}>Achievements goes here</h1>
      <h1>Check out these EPIC Plants!</h1>
      <div className='achievement__container'>
        <div className='achievement__wrapper'>
          <ul className='achievement__items'>
            <CardItem
              src='images/plants/graphics/pot-cherry-blossom.jpg'
              text='May the Cherry Blossom bring you new beginnings'
              label='Cherry Blossom'
              path='/store'
            />
            <CardItem
              src='images/plants/graphics/pot-bonsai.jpg'
              text='Slow and Steady is the new name to the game'
              label='Bonsai'
              path='/store'
            />
             <CardItem
              src='images/plants/graphics/pot-sunflower.jpg'
              text='Always look toward new oppurtunities'
              label='Sunflower'
              path='/store'
            />
          </ul>
          <ul className='achievement__items'>
            <CardItem
              src='images/plants/graphics/pot-tulip.jpg'
              text='A bit of confidence goes a long way'
              label='Tulip'
              path='/store'
            />
            <CardItem
              src='images/plants/graphics/pot-lily.jpg'
              text='Seek inner peace admist the storm'
              label='Peace Lily'
              path='/store'
            />
            <CardItem
              src='images/plants/graphics/pot-hydrangea.jpg'
              text='Learn to adapt to every situation'
              label='Hydrangea'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>

      <h1>Scope out these ADORABLE Animals!</h1>
      <div className='achievement__container'>
        <div className='achievement__wrapper'>
          <ul className='achievement__items'>
            <CardItem
              src='images/animals/collect01.png'
              text='Let the bird sing the song of your spirit'
              label='Birdie'
              path='/store'
            />
            <CardItem
              src='images/animals/collect02.png'
              text='Slow and Steady is the new name to the game'
              label='Panda'
              path='/store'
            />
             <CardItem
              src='images/animals/collect03.png'
              text='Always look toward new oppurtunities'
              label='Corgy'
              path='/store'
            />
          </ul>
          <ul className='achievement__items'>
            <CardItem
              src='images/animals/collect04.png'
              text='A bit of confidence goes a long way'
              label='Ooga Booga'
              path='/products'
            />
            <CardItem
              src='images/animals/collect05.png'
              text='Seek inner peace admist the storm'
              label='Eh'
              path='/sign-up'
            />
            <CardItem
              src='images/animals/collect06.png'
              text='Learn to adapt to every situation'
              label='Eeble Gleeble'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}