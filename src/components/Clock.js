import React, { useEffect, useState } from 'react';

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, [])

    function tick() {
        setDate(new Date());
    }
    // console.log(new DS)

    return (
        <>
            <h3>{date.toLocaleTimeString('en-GB')}</h3>
        </>
    )
}