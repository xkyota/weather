import '../styles/Detailed-weather-cards.css'

import FeelsLikeWarm from './img-Detailed-weather-cards/FeelsLike-warm.svg'
import HumidityRain from './img-Detailed-weather-cards/Humidity-rain.svg'
import PressureHight from './img-Detailed-weather-cards/Pressure-hight.svg'
import WindSpeed from './img-Detailed-weather-cards/WindSpeed.svg'
import VisibilityUnlimited from './img-Detailed-weather-cards/Visibility-unlimited.svg'

const DetailedWeatherCards = () => {
    return (
        <div className="detailed-cards">
            <ul className="detailed-cards__list">
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Feels like</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src={FeelsLikeWarm} alt="Feels like data" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Min ℃</p>
                    <p className="detailed-cards__label"></p>
                    <p className="detailed-cards__value">Max ℃</p>
                    <p className="detailed-cards__label"></p>
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Humidity</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src={HumidityRain} alt="Humidity data" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Pressure</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src={PressureHight} alt="Pressure data" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Wind speed</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src={WindSpeed} alt="Wind speed data" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Visibility</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src={VisibilityUnlimited} alt="Visibility data" />
                </li>
            </ul>
        </div>
    )
}

export default DetailedWeatherCards