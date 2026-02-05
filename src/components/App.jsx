import React, { useState } from 'react';

import Chart from './Chart';
import EightDayForecast from './Days-forecast';
import DetailedWeatherCards from './Detailed-weather-cards';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import NaturalSlider from './Natural-slider.jsx';
import PetsNews from './Pets-news';
import WeatherCards from './Weather-cards';

const API_KEY = 'a6fa06f1dd863f26d1f0ff692d53d4c8';

const App = () => {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [cards, setCards] = useState([]);

  const handleSearch = async (searchValue) => {
    if (!searchValue || !searchValue.trim()) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        searchValue
      )}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Location not found. Try a city name.');
      }

      const data = await response.json();
      const now = new Date();

      const card = {
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
      };

      setCards((prev) => [...prev, card]);
      setCity(data.name);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="app-root">
      <Header />

      <Hero onSearch={handleSearch} />

      <main>
        <section aria-label="weather-cards-section">
          <WeatherCards cards={cards} />
        </section>

        <section aria-label="eight-day-forecast">
          <EightDayForecast lat={lat} lon={lon} />
        </section>

        <DetailedWeatherCards />
        <Chart />
        <PetsNews />
        <NaturalSlider />
      </main>

      <Footer />
    </div>
  );
};

export default App;
