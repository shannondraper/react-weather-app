import React from 'react';

export default function DateComponent() {
    const currentDateObject = new Date();
    const currentDateString = currentDateObject.toString();
    const todaysDate = currentDateString.split(' ').slice(0, 4).join(' ');

    return (
        <>
            <h3>{todaysDate}</h3>
        </>
    )
}