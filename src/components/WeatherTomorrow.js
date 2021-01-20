import React from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';

const WeatherTomorrowWrapper = styled.aside`
    display         : flex;
    flex-direction  : column;
    justify-content : space-between;
    padding         : 20px;
    border-left     : 1px solid rgba(255, 255, 255, 0.4);
    margin          : 0 0 0 20px;
`;

function WeatherTomorrow({ weather }) {
    return (
        <WeatherTomorrowWrapper>
            <div>
                <h3>Tomorrow</h3>
                {<h2>{Math.round(weather.daily.data[1].temperatureHigh)}°C</h2>}
            </div>
            <div>
                {<WeatherIcon DarkSkyIconName={weather.daily.data[1].icon} />}
            </div>
            <div>
                {<p>{weather.daily.data[1].summary}</p>}
            </div>
        </WeatherTomorrowWrapper>
    )
}
export default WeatherTomorrow;