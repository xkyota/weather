// Weather-Cards.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Weather-cards.css';
import refreshIcon from './img-Weather-cards/Refresh-icon.png';
import favoriteIcon from './img-Weather-cards/Favorites-icon.png';
import deleteIcon from './img-Weather-cards/Delete-icon.png';
import mySunnyIcon from './img-Weather-cards/Sunny-icon.png';

function WeatherCard({ city, country, time, date, day, icon, temp }) {
  return (
    <div className="container">
      <div className="weather-header">
        <span>{city}</span>
        <span>{country}</span>
      </div>

      <div className="weather-time">{time}</div>

      <div className="weather-buttons">
        <button className="hourly-button">Hourly forecast</button>
        <button className="weekly-button">Weekly forecast</button>
      </div>

      <div className="date">
        {date} | {day}
      </div>

      <div className="weather-icon">
        <img src={icon} alt="weather icon" />
      </div>

      <div className="weather-temperature">{temp}°C</div>

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

export default function WeatherCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Wait a tiny bit so Hero component has mounted and created its handleSubmit
    const timer = setTimeout(() => {
      // Find the Hero form (very brittle – depends on your HTML structure)
      const form = document.querySelector('form'); // ← assumes only one form on page

      if (!form) {
        console.warn('No form found for weather search');
        return;
      }

      // Replace the original submit handler with our own
      form.onsubmit = async function (e) {
        e.preventDefault();

        // Find the input inside this form
        const input = form.querySelector('input[type="text"]');
        if (!input || !input.value.trim()) return;

        const city = input.value.trim();

        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=a6fa06f1dd863f26d1f0ff692d53d4c8&units=metric`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error('Location not found. Try a city name.');
          }

          const data = await response.json();
          const now = new Date();
          let iconUrl;
          if (data.weather[0].main.toLowerCase() === 'clear') {
            iconUrl = mySunnyIcon;
          } else {
            iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          }

          setCards(prev => [
            ...prev,
            {
              id: Date.now(),
              city: data.name,
              country: data.sys?.country || '??',
              time: now.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              }),
              date: now.toLocaleDateString('en-GB'),
              day: now.toLocaleDateString('en-US', { weekday: 'long' }),
              icon: iconUrl,
              temp: Math.round(data.main.temp),
            },
          ]);

          // Clear input (imitate original behavior)
          input.value = '';
        } catch (err) {
          alert(err.message || 'Failed to load weather');
        }

        return false; // prevent default again just in case
      };
    }, 300); // 300 ms delay – adjust if needed (100–800 ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cards-wrapper">
      {cards.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          Search a city above to see weather cards
        </p>
      ) : (
        cards.map(card => <WeatherCard key={card.id} {...card} />)
      )}
    </div>
  );
}
