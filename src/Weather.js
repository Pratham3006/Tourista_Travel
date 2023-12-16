import React, { useState } from 'react';
import './Weather.css';
import notFoundImage from './images/states/Svgs/pikachu-sleep.gif';
import welcomeImage from './images/states/Svgs/waving-pikachu.gif';
import feels from './images/states/icons/hot.png';
import humidity from './images/states/icons/humidity.png';
import pressure from './images/states/icons/thermometer.png';
import initial from './images/states/Svgs/weather.svg';
import clearSkyImage from './images/states/Svgs/clearSky.svg';
import cloudyImage from './images/states/Svgs/clouds.svg';
import rainyImage from './images/states/Svgs/rains.svg';
import drizzle from './images/states/Svgs/drizzle.svg';
import tornadoImage from './images/states/Svgs/tornado.svg';
import snowyImage from './images/states/Svgs/snow.svg';
import foggyImage from './images/states/Backgrounds/fogg.jpg';
import thunderstormImage from './images/states/Svgs/thunder.svg';
import smokyimage from './images/states/Backgrounds/smoke.jpg';
import mistyImage from './images/states/Backgrounds/mist.jpg';
import hazyImage from './images/states/Backgrounds/haze.jpg';
import dustyImage from './images/states/Backgrounds/dust.jpg';
import sandyImage from './images/states/Backgrounds/sand.jpg';
import ashyImage from './images/states/Backgrounds/ash.jpg';
import squallyImage from './images/states/Backgrounds/squall.jpg'

const api = {
  key: "2c3d1d18ffeb39790eae7dd8d13167f8",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [showWelcome, setShowWelcome] = useState(true);

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          setShowWelcome(false);
          console.log(result);
        });
    }
  }

  const datebuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  let bg = initial;

  if (!showWelcome && weather.weather) {
    const weatherCondition = weather.weather[0].main;

    switch (weatherCondition) {
      case 'Clear':
        bg = clearSkyImage; 
        break;
      case 'Clouds':
        bg = cloudyImage; 
        break;
      case 'Rain':
        bg = rainyImage; 
        break;
      case 'Drizzle':
        bg = drizzle;
        break;
      case 'Thunderstorm':
        bg = thunderstormImage;
        break;
      case 'Snow':
        bg = snowyImage;
        break;
      case 'Mist':
        bg = mistyImage;
        break;
      case 'Smoke':
        bg = smokyimage;
        break;
      case 'Haze':
        bg = hazyImage;
        break;
      case 'Dust':
        bg = dustyImage;
        break;
      case 'Fog':
        bg = foggyImage;
        break;
      case 'Sand':
        bg = sandyImage;
        break;
      case 'Ash':
        bg = ashyImage;
        break;
      case 'Squall':
        bg = squallyImage;
        break;
      case 'Tornado':
        bg = tornadoImage;
        break;
      default:
        bg = initial;
    }
    
  } else {
    bg = initial;
  }
  const intro = [
    "Why did Pikachu bring an umbrella? Because it wanted to be thunderstruck by your beauty!",
    "I'm not a weather forecaster, but I predict a 100% chance of smiles when I'm with you.",
    "If love were a temperature, we'd be in a heatwave!",
    "Are you a tornado? Because you just swept me off my feet!",
    "Is it raining? Or are you just electrifyingly stunning?",
    "I must be a snowflake because I've fallen for you!",
    "Do you have a map? I keep getting lost in your eyes, and Google Maps can't help.",
    "Is your name Wi-fi? Because I'm really feeling a connection.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you made of copper and tellurium? Because you're Cu-Te!",
    "If beauty were time, you'd be an eternity of sunshine!",
    "Are you a weather app? Because you've just brightened up my day!",
    "Do you believe in love at first sight, or should I walk by again in front of your Pikachu?",
    "Are you a star? Because your smile lights up the whole night sky.",
    "Do you have a sunburn, or are you always this hot?",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "If you were a cat, you'd purr-fectly brighten my day.",
    "Are you a camera? Every time I see you, I smile."
  ];
  

  return (
    <>
      <div className='bg' style={{ backgroundImage: `url(${bg})` }}>
        <div className='search-box'>
          <input
            type="text"
            className="search-bar"
            placeholder="Search here"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>

        <div className='location-box'>
          {showWelcome ? (
            <div className="not-found" style={{ height: "320px" }}>
              <p style={{ color: "whitesmoke", fontWeight: "600", fontSize: "2em" ,fontStyle:"italic"}}>{intro[Math.floor(Math.random() * intro.length)]}</p>
              <img src={welcomeImage} alt="Welcome Gif" />
            </div>
          ) : weather.name ? (
            <>
              <div className="location" style={{ color: "black" }}>{weather.name}, {weather.sys && weather.sys.country}</div>
              <div className="date" >{datebuilder(new Date())}</div>
            </>
          ) : (
            <div className="not-found">
              <p style={{ color: "whitesmoke", fontWeight: "600", fontSize: "2em" }}>Location not found</p>
              <img src={notFoundImage} alt="Not Found" />
            </div>
          )}
        </div>

        <div className="weather-box">
          {weather.name && (
            <>
              <div className="temp">{weather.main && weather.main.temp}°C</div>
              <div className="weather-1">{weather.weather && weather.weather[0].main}</div>
            </>
          )}

          <div className='info-box'>
          {weather.main && (
    <>
      <div className='child'>
        <img src={feels} />
        <p>Feels like</p>
        <p>{weather.main.feels_like}°C</p>
      </div>
      <div className='child'>
        <img src={humidity} />
        <p>Humidity</p>
        <p>{weather.main.humidity}%</p>
      </div>
      <div className='child'>
        <img src={pressure} />
        <p>Pressure</p>
        <p>{weather.main.pressure}hPa</p>
      </div>
    </>
  )}
          </div>
        </div>
      </div>
    </>
  )
}
