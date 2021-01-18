import React from 'react';
import styled from 'styled-components';
import WeatherDaily from './WeatherDaily';

const weekArray = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const WeatherForecast = styled.div`
    /* border: 1px solid orange; */
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    h3 {
        margin-bottom: 10px;
    }
`;

const WeatherForTheWeek = styled.div`
    display: flex;
`;

function WeatherToday() {
    return (
        <WeatherForecast>
            <section className="forecast">
                <div className="forecastTitle">
                    <h3>Forecast</h3>
                </div>
                <WeatherForTheWeek>
                    {/* TO DO: map over daily weather data for each day of the week */}
                    {weekArray.map((day, i) => <WeatherDaily day={day} key={i} />)}
                </WeatherForTheWeek>
            </section>
        </WeatherForecast>
    )
}
export default WeatherToday;