import React from 'react';
import styled from 'styled-components';

const WeatherTodayWrapper = styled.div`
    border: 1px solid yellow;
`;


function WeatherToday() {
    return (
        <WeatherTodayWrapper>
            <h2>Weather Today</h2>
        </WeatherTodayWrapper>
    )
}
export default WeatherToday;