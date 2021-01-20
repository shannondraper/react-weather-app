import React from 'react';
import styled from 'styled-components';
import {
    WiDaySleet,
    WiNightRainMix,
    WiDaySunny,
    WiNightClear,
    WiSnow,
    WiStrongWind,
    WiFog,
    WiCloudy,
    WiHail,
    WiThunderstorm,
    WiTornado,
    WiDayCloudy,
    WiNightAltCloudy
} from 'react-icons/wi';

const IconContainer = styled.span`
    width   : 70px;
    height  : 70px;
    display : inline-block;
    margin  : 15px 10px;
    svg {
        width  : 100%;
        height : 100%;
    }
`;

export default function WeatherIcon({ DarkSkyIconName }) {
    const weatherIcon = DarkSkyIconName.toLowerCase()
    return (
        <>
            <IconContainer>
                {
                    weatherIcon === "rain" ? <WiNightRainMix />
                        : weatherIcon === "clear-day" ? <WiDaySunny />
                            : weatherIcon === "clear-night" ? <WiNightClear />
                                : weatherIcon === "snow" ? <WiSnow />
                                    : weatherIcon === "sleet" ? <WiDaySleet />
                                        : weatherIcon === "wind" ? <WiStrongWind />
                                            : weatherIcon === "fog" ? <WiFog />
                                                : weatherIcon === "cloudy" ? <WiCloudy />
                                                    : weatherIcon === "hail" ? <WiHail />
                                                        : weatherIcon === "thunderstorm" ? <WiThunderstorm />
                                                            : weatherIcon === "tornado" ? <WiTornado />
                                                                : weatherIcon === "partly-cloudy-day" ? <WiDayCloudy />
                                                                    : weatherIcon === "partly-cloudy-night" ? <WiNightAltCloudy />
                                                                        : WiDayCloudy
                }
            </IconContainer>
        </>
    )
}