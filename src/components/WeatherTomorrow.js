import React from 'react';
import styled from 'styled-components';

const WeatherTomorrowWrapper = styled.div`
    border: 1px solid blue;
`;

function WeatherTomorrow() {
    return (
        <WeatherTomorrowWrapper>
            <h2>Weather Tomorrow</h2>
        </WeatherTomorrowWrapper>
    )
}
export default WeatherTomorrow;