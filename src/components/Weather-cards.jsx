import '../styles/Weather-cards.css';

// Weather-Cards.jsx
import React from 'react';

import deleteIcon from './img-Weather-cards/Delete-icon.png';
import favoriteIcon from './img-Weather-cards/Favorites-icon.png';
import refreshIcon from './img-Weather-cards/Refresh-icon.png';

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
      <div className="weather-footer">
  <button className="weather-footer-item" aria-label="Refresh">
    <img src={refreshIcon} alt="Refresh" />
  </button>

  <button className="weather-footer-item" aria-label="Favorite">
    <img src={favoriteIcon} alt="Favorite" />
  </button>

  <button className="weather-footer-item" aria-label="See more">
    <h3>See more</h3>
  </button>

  <button className="weather-footer-item" aria-label="Delete">
    <img src={deleteIcon} alt="Delete" />
  </button>
</div>

    </div>
  );
}

export default function WeatherCards({ cards = [] }) {
  return (
    <div className="weather-wrapper">
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <WeatherCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
