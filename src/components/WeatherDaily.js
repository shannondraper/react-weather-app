import React from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';

const DailyWeatherInfo = styled.div`
    width      : calc(100% / 7);
    text-align : center;
    padding    : 15px 0;
    p {
        margin-bottom : 10px;
    }
    svg {
        width  : 50px;
        height : 50px;
    }
`;

function WeatherDaily({ day, weather, index }) {
    return (
        <DailyWeatherInfo>
            <h4>{day}</h4>
            <p>Jan 18</p>
            <span className="weatherIcon">
                {weather && <WeatherIcon DarkSkyIconName={weather && weather.daily.data[`${index}`].icon} />}
            </span>
        </DailyWeatherInfo>
    )
}
export default WeatherDaily;