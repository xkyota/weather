import { useEffect, useState } from "react";
import "../styles/Detailed-weather-cards.css";

import FeelsLikeWarm from "./img-Detailed-weather-cards/FeelsLike-warm.svg";
import FeelsLikeCold from "./img-Detailed-weather-cards/FeelsLike-cold.svg";

import HumidityRain from "./img-Detailed-weather-cards/Humidity-rain.svg";
import HumidityClear from "./img-Detailed-weather-cards/Humidity-clear.png";
import HumidityClouds from "./img-Detailed-weather-cards/Humidity-clouds.svg";

import PressureHight from "./img-Detailed-weather-cards/Pressure-hight.svg";
import WindSpeed from "./img-Detailed-weather-cards/WindSpeed.svg";
import VisibilityUnlimited from "./img-Detailed-weather-cards/Visibility-unlimited.svg";

const API_KEY = "a6fa06f1dd863f26d1f0ff692d53d4c8";

const DetailedWeatherCards = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=56.95&lon=24.11&units=metric&appid=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setWeather(data))
    }, []);

    if (!weather) {
        return null;
    }

    const getFeelsLikeIcon = (temp) => {
        return temp >= 10 ? FeelsLikeWarm : FeelsLikeCold;
    };

    const humidityIcon = (weather) => {
        const type = weather.weather[0].main;
        switch (type) {
            case "Rain":
            case "Drizzle":
            case "Thunderstorm":
                return HumidityRain;
            case "Clear":
                return HumidityClear;
            case "Clouds":
                return HumidityClouds;
            default:
                return HumidityClear;
        }
    };

    return (
        <div className="detailed-cards">
            <ul className="detailed-cards__list">
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Feels like</p>
                    <p className="detailed-cards__label">
                        {Math.round(weather.main.feels_like)}℃
                    </p>
                    <img className="detailed-cards__icon" src={getFeelsLikeIcon(weather.main.feels_like)} alt="Feels like icon" />
                </li>
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Min ℃</p>
                    <p className="detailed-cards__label">{Math.round(weather.main.temp_min)}℃</p>
                    <p className="detailed-cards__value">Max ℃</p>
                    <p className="detailed-cards__label">{Math.round(weather.main.temp_max)}℃</p>
                </li>
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Humidity</p>
                    <p className="detailed-cards__label">{weather.main.humidity}%</p>
                    <img className="detailed-cards__icon" src={humidityIcon(weather)} alt="Humidity icon" />
                </li>
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Pressure</p>
                    <p className="detailed-cards__label">{weather.main.pressure} hPa</p>
                    <img className="detailed-cards__icon" src={PressureHight} alt="Pressure" />
                </li>
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Wind speed</p>
                    <p className="detailed-cards__label">{weather.wind.speed} m/s</p>
                    <img className="detailed-cards__icon" src={WindSpeed} alt="Wind speed" />
                </li>
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Visibility</p>
                    <p className="detailed-cards__label">{weather.visibility / 1000} km</p>
                    <img className="detailed-cards__icon" src={VisibilityUnlimited} alt="Visibility" />
                </li>
            </ul>
        </div>
    );
};

export default DetailedWeatherCards;
