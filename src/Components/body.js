import React, { useState, useEffect } from 'react';
import "./body.css";

function Body() {
  const [rotationDegree, setRotationDegree] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Mumbai");
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [direction, setDirection] = useState('row');
  const [curDate, setcurDate] = useState(null);
  const [Hours, setHours] = useState(null);
  const [Minutes, setMinutes] = useState(null);

  // Fetch weather data
  const fetchWeatherData = async () => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a5518acfe5msh3da494b66705d3ap134865jsnc5e7a74b1f8d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTimeData = async () => {
    const apiKey = 'dp8J89ihXlGHYkJnS8W3oQ==J1Yv0GWZ0F7DxqlI';
    const apiUrl = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('API Error Response:', errorResponse);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setcurDate(result);
      setHours(result.hour);
      setMinutes(result.minute);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const setupSuntime = () => {
    const fetchedSunrise = new Date(weatherData.sunrise * 1000);
    const fetchedSunset = new Date(weatherData.sunset * 1000);
    let timeZone = curDate.timezone;
    const timeOptions = { timeZone, hour12: false, hour: 'numeric', minute: 'numeric' };
    const formattedSunrise = fetchedSunrise.toLocaleTimeString(undefined, timeOptions);
    const formattedSunset = fetchedSunset.toLocaleTimeString(undefined, timeOptions);
    const formattedSunriseparts = formattedSunrise.split(":");
    const formattedSunsetparts = formattedSunset.split(":");
    setSunrise({
      hours: formattedSunriseparts[0],
      minutes: formattedSunriseparts[1],
    });
    setSunset({
      hours: formattedSunsetparts[0],
      minutes: formattedSunsetparts[1],
    });
  }

  useEffect(() => {
    fetchWeatherData();
    fetchTimeData();
  }, [city]);

  useEffect(() => {
    if (weatherData && curDate) {
      setupSuntime();
    }
  }, [weatherData, curDate]);

  useEffect(() => {
    if (weatherData && curDate && Hours !== null && Minutes !== null && sunrise && sunset) {
      calculateDegree();
      if (Hours > sunset.hours && Minutes > sunset.minutes) {
        setDirection('row-reverse');
      };
    }
  }, [sunrise, sunset]);


  const calculateDegree = () => {
    let startmin = parseInt(sunrise.hours) * 60 + parseInt(sunrise.minutes);
    let endmin = parseInt(sunset.hours) * 60 + parseInt(sunset.minutes);
    let midmin = parseInt(Hours) * 60 + parseInt(Minutes);
    let diffmin = endmin - startmin;
    let degree = (midmin - startmin) * 180 / diffmin;
    setRotationDegree(degree);
  }

  if (!weatherData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }


  const updateWeather = (event) => {
    event.preventDefault();
    let temp = event.target.elements.city.value;
    const newCity = temp.charAt(0).toUpperCase() + temp.slice(1);
    setCity(newCity);
    setWeatherData(null);
  }
  const getWindDirection = (degree) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round((degree % 360) / 45);
    return directions[index];
  }

  let temperature = weatherData.temp;
  let feelsLike = weatherData.feels_like;
  let humidity = weatherData.humidity;
  let minTemperature = weatherData.min_temp;
  let maxTemperature = weatherData.max_temp;
  let cloudPercentage = weatherData.cloud_pct;
  let windSpeed = weatherData.wind_speed;
  let windDegrees = getWindDirection(weatherData.wind_degrees);

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
      <form className='searchbar' onSubmit={updateWeather}>
        <input type='search' placeholder='Enter City Name' className='searchfield' name='city' />
        <button type='submit' className='searchbtn'><i className="bi bi-search"></i></button>

      </form>
      <h1 className='city'>
        <span>{city}</span>
        <span>{Minutes && Hours.toString().padStart(2, '0')}:{Hours && Minutes.toString().padStart(2, '0')}</span>
      </h1>
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
          <span>{windDegrees}</span>
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
          <span>Sunrise<br></br>{sunrise && sunrise.hours}:{sunrise && sunrise.minutes}</span>
          <span>Sunset<br></br>{sunset && sunset.hours}:{sunset && sunset.minutes}</span>
        </div>
      </section>
    </main>
  );
}

export default Body;