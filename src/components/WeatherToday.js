import React from 'react';
import styled from 'styled-components';

const WeatherTodayWrapper = styled.div`
    /* border: 1px solid yellow; */
`;


function WeatherToday({ weather }) {
    return (
        <WeatherTodayWrapper>
            <div className="currentWeatherLayout">
                <div className="currentTemp">
                    <h3>Current Temp.</h3>
                    <div className="mainTemp">
                        {weather && <h2>{Math.round(weather.currently.temperature)}°C</h2>}
                    </div>
                    <div className="lowHighTemp">
                        {weather && <span>{Math.round(weather.daily.data[0].apparentTemperatureLow)}°C</span>}
                        <span> / </span>
                        {weather && <span>{Math.round(weather.daily.data[0].apparentTemperatureHigh)}°C</span>}
                    </div>
                </div>
                <div className="currentIcon">
                    {weather && <h3>{weather.currently.summary}</h3>}
                    <span>
                        {weather && <h3>{weather.currently.icon} icon</h3>}
                    </span>
                </div>
                <div className="currentDescription">
                    {weather && <p>{weather.daily.summary}</p>}
                </div>
            </div>
            <div className="todayData flex">
                <div className="feelsLike">
                    <h3>Feels Like</h3>
                    {weather && <h2>{Math.round(weather.currently.apparentTemperature)}°C</h2>}
                </div>
                <div className="humidity">
                    <h3>Humidity</h3>
                    {weather && <h2>{weather.currently.humidity * 100}%</h2>}
                </div>
                <div className="pop">
                    <h3>P.0.P.</h3>
                    {weather && <h2>{weather.currently.precipProbability}%</h2>}
                </div>
            </div>
        </WeatherTodayWrapper>
    )
}
export default WeatherToday;