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

export default function Settings({
    // handleTemperatureScaleChange,
    // farenheitChecked
}) {
    // const [farenheitChecked, setFarenheitChecked] = useState(false);
    // const [clockChecked, setClockChecked] = useState(false);

    // const updateTemperatureScale = (e) => {
    //     setFarenheitChecked(e.target.checked)
    //     console.log('farenheitChecked =', e.target.checked)
    // }
    // const updateClockScale = (e) => {
    //     setClockChecked(e.target.checked)
    //     console.log('ClockChecked =', e.target.checked)
    // }

    return (
        <SettingsWrapper className="settings" >
            {/* <div>
                <p>Is it checked? {clockChecked ? "true" : "false"}</p>
                <label className="switch hour-switch">
                    <input
                        type="checkbox"
                        id="hour-switch"
                        checked={clockChecked}
                        onChange={updateClockScale}
                    />
                    <span className="slider round"></span>
                </label>
            </div> */}
            <div>
                {/* <p>Is it checked? {farenheitChecked ? "true" : "false"}</p> */}
                <label className="switch degree-switch">
                    <input
                        type="checkbox"
                        id="degree-switch"
                    // checked={farenheitChecked}
                    // onChange={updateTemperatureScale}
                    />
                    <span className="slider round"></span>
                </label>
            </div >
        </SettingsWrapper >
    )

}