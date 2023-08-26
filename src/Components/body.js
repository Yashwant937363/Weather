import React, { useState, useEffect } from 'react';
import "./body.css";

function Body() {
  const [rotationDegree, setRotationDegree] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Mumbai");
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [direction, setDirection] = useState('row');
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a5518acfe5msh3da494b66705d3ap134865jsnc5e7a74b1f8d',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      const fetchedSunrise = new Date(weatherData.sunrise * 1000);
      const fetchedSunset = new Date(weatherData.sunset * 1000);
      setSunrise(fetchedSunrise);
      setSunset(fetchedSunset);
    }
  }, [weatherData]);

  useEffect(() => {
    if (sunrise && sunset) {
      calculateDegree();
    }
  }, [sunrise, sunset]);

  const calculateDegree = () => {
    let curDate = new Date();
    let startmin = sunrise.getHours() * 60 + sunrise.getMinutes();
    let endmin = sunset.getHours() * 60 + sunset.getMinutes();
    let midmin = curDate.getHours() * 60 + curDate.getMinutes();
    let diffmin = endmin - startmin;
    let degree = (midmin-startmin) * 180 / diffmin;
    if (curDate.getHours() > sunset.getHours() || (curDate.getHours() === sunset.getHours() && curDate.getMinutes() > sunset.getMinutes())) {
      setDirection('row-reverse');
    }    
    console.log(direction)
    console.log(startmin);
    console.log(endmin);
    console.log(midmin);
    console.log(diffmin);
    console.log(degree);

    setRotationDegree(degree);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.temp;
  const feelsLike = weatherData.feels_like;
  const humidity = weatherData.humidity;
  const minTemperature = weatherData.min_temp;
  const maxTemperature = weatherData.max_temp;
  const cloudPercentage = weatherData.cloud_pct;
  const windSpeed = weatherData.wind_speed;
  const windDegrees = weatherData.wind_degrees;

  return (
    <main className="section">
      <style>
        {`
          .daynight {
            transform: rotate(${rotationDegree}deg);
          }
          .time{
            flex-direction:${direction};
          }
        `}
      </style>
      <section id="temp" className="card">
        <span className="feli">Feels Like {feelsLike}°C</span>
        <span className="temperature">{temperature}°C</span>
        <fieldset>
          <legend>Minimum </legend>
          <span>{minTemperature}</span>
        </fieldset>
        <fieldset>
          <legend>Maximum </legend>
          <span>{maxTemperature}</span>
        </fieldset>
      </section>
      <div className="compo">
        <section className="card cloud">
          <span>Cloud Percentage</span>
          <span>{cloudPercentage}</span>
        </section>
        <section className="card winds">
          <span>Wind Speed</span>
          <span>{windSpeed}</span>
        </section>
        <section className="card">
          <span>Wind Direction</span>
          <span>N</span>
        </section>
        <section className="card">
          <span>Humidity</span>
          <span>{humidity}%</span>
        </section>
      </div>
      <section className="card sunriseset">
        <div className='hider'>
          <div className="daynight">
            <div className='sun'></div>
            <div className='moon'></div>
          </div>
        </div>
        <div className='time'>
          <span>Sunrise<br></br>{sunrise && sunrise.getHours().toString().padStart(2, '0')}:{sunrise && sunrise.getMinutes().toString().padStart(2, '0')}</span>
          <span>Sunset<br></br>{sunset && sunset.getHours().toString().padStart(2, '0')}:{sunset && sunset.getMinutes().toString().padStart(2, '0')}</span>
        </div>
      </section>
    </main>
  );
}

export default Body;
