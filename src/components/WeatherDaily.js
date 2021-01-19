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

    const unixTimestamp = weather.daily.data[index + 1].time;
    const dateObject = new Date(unixTimestamp * 1000);
    const month = dateObject.toLocaleString("en-US", { month: "long" }).substring(0, 3);
    const dayOfMonth = dateObject.toLocaleString("en-US", { day: "numeric" });

    return (
        <DailyWeatherInfo>
            <h4>{day}</h4>
            <p>{month} {dayOfMonth}</p>
            <span className="weatherIcon">
                {weather && <WeatherIcon DarkSkyIconName={weather && weather.daily.data[`${index}`].icon} />}
            </span>
        </DailyWeatherInfo>
    )
}
export default WeatherDaily;