import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Plants!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/plants/real/real-cherry-blossom.jpg'
              text='May the Cherry Blossom bring you new beginnings'
              label='Cherry Blossom'
              path='/store'
            />
            <CardItem
              src='images/plants/real/real-bonsai.jpg'
              text='Slow and Steady is the new name to the game'
              label='Bonsai'
              path='/store'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/plants/real/real-sunflower.jpg'
              text='Always look toward new oppurtunities'
              label='Sunflower'
              path='/store'
            />
            <CardItem
              src='images/plants/real/real-tulip.jpg'
              text='A bit of confidence goes a long way'
              label='Tulip'
              path='/store'
            />
            <CardItem
              src='images/plants/real/real-peace-lily.jpg'
              text='Seek inner peace admist the storm'
              label='Peace Lily'
              path='/store'
            />
            <CardItem
              src='images/plants/real/real-hydrangea.jpg'
              text='Learn to adapt to every situation'
              label='Hydrangea'
              path='/store'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
