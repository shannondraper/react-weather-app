import React from 'react';
import styled from 'styled-components';

const HeadingWhite = styled.h2`
    color: #1F6D9E;
    background-color: white;
    padding: 0 5px;
    font-weight: 400;
    margin-bottom: 5px;
    display: inline-block;
`;
const LocationDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;
const Header = styled.header`
    display: flex;
	flex-direction: column;
`;

function LocationData() {
    return (
        <>
            <Header>
                <LocationDataWrapper>
                    <div>
                        <HeadingWhite>Toronto</HeadingWhite>
                        <h3>Sun Jan 17 2021</h3>
                        <h3 id="clock">10:45:32</h3>
                    </div>
                    <div>
                        <h3 className="sunriseTime">SUNRISE: 07:48</h3>
                        <h3 className="sunsetTime">SUNSET: 17:11</h3>
                    </div>
                </LocationDataWrapper>
                <div className="dotted"></div>
            </Header>
        </>
    )
}
export default LocationData;