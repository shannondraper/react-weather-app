import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherToday({ weather }) {
    return (
        <section>
            <div className="currentWeatherLayout">
                <div className="currentTemp">
                    <h3>Current Temp.</h3>
                    <div className="mainTemp">
                        {<h2>{Math.round(weather.currently.temperature)}°C</h2>}
                    </div>
                    <div className="lowHighTemp">
                        {<span>{Math.round(weather.daily.data[0].temperatureLow)}°C</span>}
                        <span> / </span>
                        {<span>{Math.round(weather.daily.data[0].temperatureHigh)}°C</span>}
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
                    {<h2>{Math.round(weather.currently.apparentTemperature)}°C</h2>}
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