import React from 'react';
import {useState, useEffect} from 'react';

export default function Plant() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const plantType = [ "images/plants/graphics/plant-stage01.png","images/plants/graphics/plant-stage02.png",
  "images/plants/graphics/plant-cherry-blossom.png","images/plants/graphics/plant-bonsai.png",
  "images/plants/graphics/plant-hydrangea.png","images/plants/graphics/plant-lily.png",
  "images/plants/graphics/plant-sunflower.png","images/plants/graphics/plant-tulip.png"]

  useEffect(() => {
    if (currentIndex === plantType.length - 1) {
      setCurrentIndex(0);
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <div>
      <h1 style={{margin:'20px'}}>Grow your plant achieving your set goals</h1>
      <img src={plantType[currentIndex]} height="480"/>
    </div>
  );
}