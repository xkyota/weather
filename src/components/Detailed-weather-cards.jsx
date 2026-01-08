import '../styles/Detailed-weather-cards.css';

const DetailedWeatherCards = () => {
    return (
        <div className="detailed-cards">
            <ul className="detailed-cards__list">
                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Feels like</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src="" alt="" />
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
                    <img className="detailed-cards__icon" src="" alt="" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Pressure</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src="" alt="" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Wind speed</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src="" alt="" />
                </li>

                <li className="detailed-cards__item">
                    <p className="detailed-cards__value">Visibility</p>
                    <p className="detailed-cards__label"></p>
                    <img className="detailed-cards__icon" src="" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default DetailedWeatherCards 