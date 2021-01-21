import React from 'react';
import WeatherIcon from './WeatherIcon';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

function WeatherToday({ weather, farenheitChecked }) {
    console.log(weather);
    return (
        <section>
            <div className="currentWeatherLayout">
                <div className="currentTemp">
                    <h3>Current Temp.</h3>
                    <div className="mainTemp">
                        {
                            <h2>
                                {Math.round(weather.currently.temperature)}
                                {farenheitChecked ? '°F' : '°C'}
                            </h2>
                        }
                    </div>
                    <div className="lowHighTemp">
                        {
                            <span>
                                <BsArrowDown />
                                {Math.round(weather.daily.data[0].temperatureLow)}
                                {farenheitChecked ? '°F' : '°C'}
                            </span>
                        }
                        {/* <span> / </span> */}
                        {
                            <span>
                                <BsArrowUp />
                                {Math.round(weather.daily.data[0].temperatureHigh)}
                                {farenheitChecked ? '°F' : '°C'}
                            </span>
                        }
                    </div>
                </div>
                <div className="currentIcon">
                    {<h3>{weather.currently.summary}</h3>}
                    {<WeatherIcon DarkSkyIconName={weather.currently.icon} />}
                </div>
                <div className="currentDescription">
                    {<p>{weather.daily.summary}</p>}
                </div>
            </div>
            <div className="todayData flex">
                <div className="feelsLike">
                    <h3>Feels Like</h3>
                    {
                        <h2>
                            {Math.round(weather.currently.apparentTemperature)}
                            {farenheitChecked ? '°F' : '°C'}
                        </h2>
                    }
                </div>
                <div className="humidity">
                    <h3>Humidity</h3>
                    {<h2>{weather.currently.humidity * 100}%</h2>}
                </div>
                <div className="pop">
                    <h3>P.0.P.</h3>
                    {<h2>{Math.round(weather.currently.precipProbability)}%</h2>}
                </div>
            </div>
        </section>
    )
}
export default WeatherToday;