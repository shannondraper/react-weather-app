import React from 'react';
import styled from 'styled-components';
import { WiDaySleet } from 'react-icons/wi';

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

function WeatherDaily({ day }) {
    return (
        <DailyWeatherInfo>
            <h4>{day}</h4>
            <p>Jan 18</p>
            <span className="weatherIcon">
                <WiDaySleet />
            </span>
        </DailyWeatherInfo>
    )
}
export default WeatherDaily;