import "../styles/Detailed-weather-cards.css";

import FeelsLikeWarm from "./img-Detailed-weather-cards/FeelsLike-warm.svg";
import FeelsLikeCold from "./img-Detailed-weather-cards/FeelsLike-cold.svg";
import HumidityRain from "./img-Detailed-weather-cards/Humidity-rain.svg";
import HumidityClear from "./img-Detailed-weather-cards/Humidity-clear.png";
import HumidityClouds from "./img-Detailed-weather-cards/Humidity-clouds.svg";
import PressureHight from "./img-Detailed-weather-cards/Pressure-hight.svg";
import WindSpeed from "./img-Detailed-weather-cards/WindSpeed.svg";
import VisibilityUnlimited from "./img-Detailed-weather-cards/Visibility-unlimited.svg";


const DetailedWeatherCards = ({ weatherData }) => {
    if (!weatherData) return null;

    const getFeelsLikeIcon = (temp) => (temp >= 10 ? FeelsLikeWarm : FeelsLikeCold);

    const humidityIcon = () => {
        if (weatherData.humidity >= 80) return HumidityRain;
        if (weatherData.humidity >= 50) return HumidityClouds;
        return HumidityClear;
    };

    return (
        <div className="detailed-cards">
            <ul className="detailed-cards__list">
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Feels like</p>
                    <p className="detailed-cards__label">{weatherData.temp}℃</p>
                    <img className="detailed-cards__icon" src={getFeelsLikeIcon(weatherData.temp)} alt="Feels like icon" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Min</p>
                    <p className="detailed-cards__label">{weatherData.temp_min}℃</p>
                    <p className="detailed-cards__value">Max</p>
                    <p className="detailed-cards__label">{weatherData.temp_max}℃</p>
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Humidity</p>
                    <p className="detailed-cards__label">{weatherData.humidity}%</p>
                    <img className="detailed-cards__icon" src={humidityIcon()} alt="Humidity icon" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Pressure</p>
                    <p className="detailed-cards__label">{weatherData.pressure} hPa</p>
                    <img className="detailed-cards__icon" src={PressureHight} alt="Pressure icon" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Wind</p>
                    <p className="detailed-cards__label">{weatherData.wind} m/s</p>
                    <img className="detailed-cards__icon" src={WindSpeed} alt="Wind icon" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Visibility</p>
                    <p className="detailed-cards__label">{weatherData.visibility / 1000} km</p>
                    <img className="detailed-cards__icon" src={VisibilityUnlimited} alt="Visibility icon" />
                </li>
            </ul>
        </div>
    );
};

export default DetailedWeatherCards;