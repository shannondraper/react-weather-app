import React from 'react';
import styled from 'styled-components';

const WeatherTodayWrapper = styled.div`
    /* border: 1px solid yellow; */
`;


function WeatherToday() {
    return (
        <WeatherTodayWrapper>
            {/* <h2>Weather Today</h2> */}
            <div className="currentWeatherLayout">
                <div className="currentTemp">
                    <h3>Current Temp.</h3>
                    <div className="mainTemp">
                        <h2>2°C</h2>
                    </div>
                    <div className="lowHighTemp">
                        <span>-7°C /</span>
                        <span>-1°C</span>
                    </div>
                </div>
                <div className="currentIcon">
                    <h3>Mostly Cloudy</h3>
                    <span>
                        <img src="https://via.placeholder.com/80x80" alt="" />
                    </span>
                </div>
                <div className="currentDescription">
                    <p>No precipitation throughout the week.</p>
                </div>
            </div>
            <div className="todayData flex">
                <div className="feelsLike">
                    <h3>Feels Like</h3>
                    <h2>-3°C</h2>
                </div>
                <div className="humidity">
                    <h3>Humidity</h3>
                    <h2>82%</h2>
                </div>
                <div className="pop">
                    <h3>P.0.P.</h3>
                    <h2>0%</h2>
                </div>
            </div>
        </WeatherTodayWrapper>
    )
}
export default WeatherToday;