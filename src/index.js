import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import Chart from './components/Chart';
import EightDayForecast from './components/Days-forecast';
import DetailedWeatherCards from './components/Detailed-weather-cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NaturalSlider from './components/Natural-slider.jsx';
import PetsNews from './components/Pets-news';
import WeatherCards from './components/Weather-cards';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <WeatherCards />
    <DetailedWeatherCards />
    <Chart />
    <EightDayForecast />
    <PetsNews />
    <NaturalSlider />
    <Footer />
  </React.StrictMode>
);
