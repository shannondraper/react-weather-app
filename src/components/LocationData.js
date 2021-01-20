import React from 'react';
import styled from 'styled-components';
import DateComponent from './DateComponent';
import Clock from './Clock';

const HeadingWhite = styled.h2`
    color            : #1F6D9E;
    background-color : white;
    padding          : 0 5px;
    font-weight      : 400;
    margin-bottom    : 5px;
    display          : inline-block;
`;
const LocationDataWrapper = styled.div`
    display         : flex;
    flex-direction  : row;
    justify-content : space-between;
    align-items     : flex-end;
    .sunData {
        text-align : right;
    }
`;
const Header = styled.header`
    display        : flex;
    flex-direction : column;
`;

function LocationData({ weather }) {
    const sunset = weather.daily.data[0].sunsetTime;
    const sunsetObj = new Date((sunset * 1000) - (5 * 60 * 60 * 1000));
    const utcStringSunset = sunsetObj.toUTCString();
    const sunsetNewTime = utcStringSunset.slice(-12, -7);

    const sunrise = weather.daily.data[0].sunriseTime;
    const sunriseObj = new Date((sunrise * 1000) - (5 * 60 * 60 * 1000));
    const utcStringSunrise = sunriseObj.toUTCString();
    const sunriseNewTime = utcStringSunrise.slice(-12, -7);

    return (
        <>
            <Header>
                <LocationDataWrapper>
                    <div>
                        <HeadingWhite>Toronto</HeadingWhite>
                        <DateComponent />
                        <Clock />
                    </div>
                    <div className="sunData">
                        <h3 className="sunriseTime">
                            SUNRISE: {sunriseNewTime}
                        </h3>
                        <h3 className="sunsetTime">
                            SUNSET: {sunsetNewTime}
                        </h3>
                    </div>
                </LocationDataWrapper>
                <div className="dotted"></div>
            </Header>
        </>
    )
}
export default LocationData;