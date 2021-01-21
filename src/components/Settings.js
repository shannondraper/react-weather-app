import React, { useState } from "react";
import styled from 'styled-components';

const SettingsWrapper = styled.aside`
position   : absolute;
right      : 60px;
top        : 30px;
transition : 0.2s all ease;
opacity    : 0.4;
&:hover {
    opacity : 1;
}
`;

export default function Settings(props) {
    const [temperatureScale, setTemperatureScale] = useState(false);
    const [farenheitChecked, setFarenheitChecked] = useState(false);

    // const handleTemperatureScaleChange = (e) => {
    //     setTemperatureScale(e.target.checked);
    // }
    function handleTemperatureScaleChange(event) {
        props.onChange(event.target.checked);
    }

    return (
        <SettingsWrapper className="settings" >
            <div>
                <p>Is it checked? {temperatureScale ? "true" : "false"}</p>
                <label className="switch hour-switch">
                    <input
                        type="checkbox"
                        id="hour-switch"
                    // checked={props.clockChecked}
                    // onChange={handleClockChange}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
            <div>
                {/* <p>Is it checked? {props.farenheitChecked ? "true" : "false"}</p> */}
                <label className="switch degree-switch">
                    <input
                        type="checkbox"
                        id="degree-switch"
                        checked={props.farenheitChecked}
                        onChange={handleTemperatureScaleChange}
                    // checked={temperatureScale}
                    // onChange={(e) => { handleTemperatureScaleChange(e) }}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </SettingsWrapper>
    )

}