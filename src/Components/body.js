import React, { useState, useEffect } from 'react';
import "./body.css";
import { useDispatch, useSelector } from 'react-redux';
import { setSunrise, setSunset,weatherClear } from '../store/slice/weather';
import { timeClear } from '../store/slice/time';
import SearchBar from './SearchBar';

function Body() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const weatherisLoading = useSelector((state) => state.weather.isLoading);
  const curDate = useSelector((state) => state.time.data);
  const curDateisLoading = useSelector((state) => state.time.isLoading);
  const Hours = useSelector((state) => state.time.hours);
  const Minutes = useSelector((state) => state.time.minutes);
  const sunrise = useSelector((state) => state.weather.sunrise);;
  const sunset = useSelector((state) => state.weather.sunset);
  const city = useSelector((state) => state.weather.city);
  const weatherStatus = useSelector((state) => state.weather.status);
  const timeStatus = useSelector((state) => state.time.status);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [direction, setDirection] = useState('row');
  const [windDegrees, setwindDegrees] = useState(null);

  useEffect(() => {
    if (weatherData && curDate) {
      const fetchedSunrise = new Date(weatherData.sunrise * 1000);
      const fetchedSunset = new Date(weatherData.sunset * 1000);
      const timeOptions = { timeZone: curDate.timezone, hour12: false, hour: 'numeric', minute: 'numeric' };
      dispatch(setSunrise({
        hours: fetchedSunrise.toLocaleTimeString(undefined, timeOptions).split(":")[0],
        minutes: fetchedSunrise.toLocaleTimeString(undefined, timeOptions).split(":")[1],
      }));
      dispatch(setSunset({
        hours: fetchedSunset.toLocaleTimeString(undefined, timeOptions).split(":")[0],
        minutes: fetchedSunset.toLocaleTimeString(undefined, timeOptions).split(":")[1],
      }));
    }// eslint-disable-next-line
  }, [weatherData, curDate]);

  useEffect(() => {
    if (weatherData && curDate && Hours !== null && Minutes !== null && sunrise && sunset) {
      calculateDegree();
      if (Hours > sunset.hours && Minutes > sunset.minutes) {
        setDirection('row-reverse');
      };
    }// eslint-disable-next-line
  }, [sunrise, sunset]);

  const calculateDegree = () => {
    let startmin = parseInt(sunrise.hours) * 60 + parseInt(sunrise.minutes);
    let endmin = parseInt(sunset.hours) * 60 + parseInt(sunset.minutes);
    let midmin = parseInt(Hours) * 60 + parseInt(Minutes);
    let degree = (midmin - startmin) * 180 / (endmin - startmin);
    setRotationDegree(degree);
  }

  useEffect(() => {
    const getWindDirection = (degree) => {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      const index = Math.round((degree % 360) / 45);
      return directions[index];
    }
    if (weatherData) {
      setwindDegrees(getWindDirection(weatherData.wind_degrees));
    }
    // eslint-disable-next-line
  }, [weatherData]);

  const handleRestart = () => {
    dispatch(weatherClear());
    dispatch(timeClear());
  }
  if ((weatherStatus !== 200) || (timeStatus !== 200)) {
    return (
      <div className="first">
        Something Went Wrong
        <button className='resetbtn searchbtn' onClick={handleRestart}>Reset</button>
      </div>
    );
  }
  else if (weatherisLoading && curDateisLoading && !(sunrise && sunset && rotationDegree)) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  else if (weatherData == null) {
    return (
      <>
        <SearchBar />
        <div className='first'>
          nothing to Preview Please Enter City Name and Hit the Search Button
        </div>
      </>
    )
  }


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
      <SearchBar />
      <h1 className='city'>
        <span>{city}</span>
        <span>{Minutes && Hours.toString().padStart(2, '0')}:{Hours && Minutes.toString().padStart(2, '0')}</span>
      </h1>
      <section id="temp" className="card">
        <span className="feli">Feels Like {weatherData.feels_like}°C</span>
        <span className="temperature">{weatherData.temp}°C</span>
        <fieldset>
          <legend>Minimum </legend>
          <span>{weatherData.min_temp}°C</span>
        </fieldset>
        <fieldset>
          <legend>Maximum </legend>
          <span>{weatherData.max_temp}°C</span>
        </fieldset>
      </section>
      <section className="card cloud box">
        <span>Cloud Percentage</span>
        <span>{weatherData.cloud_pct}%</span>
      </section>
      <section className="card winds box">
        <span>Wind Speed</span>
        <span>{weatherData.wind_speed} m/s</span>
      </section>
      <section className="card windd box">
        <span>Wind Direction</span>
        <span>{windDegrees}</span>
      </section>
      <section className="card humidity box">
        <span>Humidity</span>
        <span>{weatherData.humidity}%</span>
      </section>
      <section className="card sunriseset">
        <div className='hider'>
          <div className="daynight">
            <div className='sun'></div>
            <div className='moon'></div>
          </div>
        </div>
        <div className='time'>
          <span>Sunrise<br></br>{sunrise && sunrise.hours}:{sunrise && sunrise.minutes}</span>
          <span>Sunset<br></br>{sunset && sunset.hours}:{sunset && sunset.minutes}</span>
        </div>
      </section>
    </main>
  );
}

export default Body;