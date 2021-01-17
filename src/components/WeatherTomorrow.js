import React from 'react';
import styled from 'styled-components';

const WeatherTomorrowWrapper = styled.aside`
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    margin: 0 0 0 20px;
`;

function WeatherTomorrow() {
    return (
        <WeatherTomorrowWrapper>
            <div>
                <h3>Tomorrow</h3>
                <h2>3°C</h2>
            </div>
            <div>
                <img src="https://via.placeholder.com/80x80" alt="" />
            </div>
            <div>
                <p>Mostly cloudy throughout the day.</p>
            </div>
        </WeatherTomorrowWrapper>
    )
}
export default WeatherTomorrow;