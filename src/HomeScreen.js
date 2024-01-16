import logo from './images/logo.png'
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import video1 from './video/vedio1.mp4'
import video2 from './video/vedio2.mp4'
import video3 from './video/vedio3.mp4'
import video4 from './video/vedio4.mp4'
import Description from './components/Description';
import Cardrow from './components/Cardrow';
import Page from './components/Page';
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ReactDOM } from 'react';
import image1 from './images/states/landing/Maharshtra.jpg'
import goa from './images/states/landing/Goa.jpg'
import kerala from './images/states/landing/kerala'
import rajastan from './images/states/landing/rajasthan'
import karnataka from './images/states/landing/karnataka.jpg'
import sikkim from './images/states/landing/sikkim.jpg'
import meghalaya from './images/states/landing/meghalaya.jpg'
import himachal from './images/states/landing/himachal'
import uttarpradesh from './images/states/landing/uttarpradesh'
import madhyapradesh from './images/states/landing/MadhyaPradesh.jpg'




function HomeScreen() {
  return (
    <>
      <div className="bg-clr">
      <Navbar img={logo} />
      <Carousel video={video1}  />
      <Description />
      <center>   <h3>Select the State you want to go to</h3></center>
      <Cardrow Description={"Tropical & Vibrant"}  state={"Goa"} para={"Goa is a paradisiacal coastal destination known for its pristine beaches, vibrant nightlife, and rich Portuguese heritage."} image={goa} Description1={"Land of Ganesha"} state1={"Maharasthra"} para1={"Maharashtra is a diverse state in western India known for its bustling cosmopolitan cities, such as Mumbai"} image1={image1} />
      <Cardrow Description={"Paradise on Earth"} state={"Kerala"} para={"Kerala is known for its tranquil atmosphere.From its lush green landscapes to its serene backwaters"}image={kerala} Description1={"Desert Land"} state1={"Rajasthan"} para1={"Rajasthan is renowned for its majestic palaces, forts, and havelis that showcase the rich cultural heritage"} image1={rajastan} />
      <Cardrow Description={"Dravidian Palace"} state={"Tamilnadu"} para={"a land steeped in Dravidian heritage, captivates with its ancient temples and rich cultural traditions"} image={karnataka} Description1={"Himalayan Paradise"} state1={"Sikkim"} para1={"Nestled in the lap of the majestic Himalayas, Sikkim is a picturesque state blessed with breathtaking natural beauty"} image1={sikkim} />
      <Cardrow Description={"Cloudy Enchantress"} state={"Meghalaya"} para={"Meghalaya, known as the abode of clouds, is a mesmerizing state in northeastern India"} image={meghalaya} Description1={"Alpine Wonderland"} state1={"Himachal Pradesh"} para1={"Himachal Pradesh, nestled in the majestic Himalayas, enchants with its snow-capped peaks, picturesque valleys"} image1={himachal} />
      <Cardrow Description={"Cultural Tapestry"} state={"Uttar Pradesh"} para={"the largest state in India, is a treasure trove , with iconic sites like the Taj Mahal in Agra"} image={uttarpradesh} Description1={"Heartland Heritage"} state1={"Madhya Pradesh"} para1={"Aptly called the heart of India, is a state brimming with historical treasures and architectural wonders"} image1={madhyapradesh} />
      </div>
      
     

    </>

  );
}

export default HomeScreen;
