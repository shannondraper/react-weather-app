import React from 'react';
import styled from 'styled-components';
import WeatherDaily from './WeatherDaily';

const WeatherForecast = styled.div`
    padding-top : 20px;
    border-top  : 1px solid rgba(255, 255, 255, 0.4);
    h3 {
        margin-bottom : 10px;
    }
`;

const WeatherForTheWeek = styled.div`
    display : flex;
`;


function WeatherToday({ weather }) {
    // remove index 0 from weekArray
    // since index 0 is current day's weather
    const weekArray = weather.daily.data.slice(1);

    return (
        <WeatherForecast>
            <section className="forecast">
                <div className="forecastTitle">
                    <h3>Forecast</h3>
                </div>
                <WeatherForTheWeek>
                    {
                        weekArray.map((day, index) =>
                            <WeatherDaily
                                weather={weather}
                                day={day}
                                index={index}
                            />
                        )
                    }
                </WeatherForTheWeek>
            </section>
        </WeatherForecast>
    )
}
export default WeatherToday;