// Weather-Cards.jsx
import React, { useState } from 'react';
import Hero from './Hero';
import '../styles/Weather-cards.css';
import refreshIcon from './img-Weather-cards/Refresh-icon.png';
import favoriteIcon from './img-Weather-cards/Favorites-icon.png';
import deleteIcon from './img-Weather-cards/Delete-icon.png';


function WeatherCard({ city, country, time, date, day, icon, temp }) {
  return (
    <div className="container">
      <div className="header">
        <span>{city}</span>
        <span>{country}</span>
      </div>

      <div className="time">{time}</div>

      <div className="buttons">
        <button className="hourly-button">Hourly forecast</button>
        <button className="weekly-button">Weekly forecast</button>
      </div>

      <div className="date">
        {date} | {day}
      </div>

      <div className="icon">
        <img src={icon} alt="weather icon" />
      </div>

      <div className="temperature">{temp}°C</div>
      <div className="footer">
  <button className="footer-item" aria-label="Refresh">
    <img src={refreshIcon} alt="Refresh" />
  </button>

  <button className="footer-item" aria-label="Favorite">
    <img src={favoriteIcon} alt="Favorite" />
  </button>

  <button className="footer-item" aria-label="See more">
    <h3>See more</h3>
  </button>

  <button className="footer-item" aria-label="Delete">
    <img src={deleteIcon} alt="Delete" />
  </button>
</div>

    </div>
  );
}

export default function WeatherCards() {
  const [cards, setCards] = useState([]);

  const fetchWeather = async searchValue => {
    if (!searchValue.trim()) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        searchValue
      )}&appid=a6fa06f1dd863f26d1f0ff692d53d4c8&units=metric`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Location not found. Try a city name.');
      }

      const data = await response.json();
      const now = new Date();

      setCards(prev => [
        ...prev,
        {
          city: data.name,
          country: data.sys.country,
          time: now.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          date: now.toLocaleDateString('en-GB'),
          day: now.toLocaleDateString('en-US', { weekday: 'long' }),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temp: Math.round(data.main.temp),
        },
      ]);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="weather-wrapper">
      <Hero onSearch={fetchWeather} />

      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <WeatherCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
