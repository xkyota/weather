import '../styles/Days-forecast.css';

import {
  useEffect,
  useState,
} from 'react';

const API_KEY = '244a90d3c30b5ff48a22889ee12328c0';

const EightDayForecast = ({ lat = null, lon = null }) => {
  const [forecast8Days, setForecast8Days] = useState([]);

  useEffect(() => {
    if (!lat || !lon) {
      setForecast8Days([]);
      return;
    }

    let cancelled = false;

    async function get8DayForecast() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();

        if (!cancelled) {
          setForecast8Days((data.daily || []).slice(0, 8));
        }
      } catch (error) {
        console.error('API Error: ', error);
      }
    }

    get8DayForecast();

    return () => {
      cancelled = true;
    };
  }, [lat, lon]);

  if (!lat || !lon) {
    return (
      <div className="container8daysForecast">
        <span>8-day forecast</span>
        <p>Select a city to see the 8-day forecast.</p>
      </div>
    );
  }

  return (
    <div className="container8daysForecast">
      <span>8-day forecast</span>

      {forecast8Days.map((day, index) => (
        <div className="dayForecast" key={index}>
          <p className="textForecast">
            {new Date(day.dt * 1000).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </p>
          <div className="degrees">
            <span className="temp">
              {day.temp.max.toFixed(1)} / {day.temp.min.toFixed(1)} ℃
            </span>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
          </div>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default EightDayForecast;
