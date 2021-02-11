import './App.scss';
import './Switch.scss';
import React, { useEffect, useState, setState } from 'react';
import styled from 'styled-components';
import LocationData from './components/LocationData';
import WeatherToday from './components/WeatherToday';
import WeatherTomorrow from './components/WeatherTomorrow';
import WeatherForecast from './components/WeatherForecast';
import Settings from './components/Settings';

const Wrapper = styled.main`
	display        : flex;
	flex-direction : column;
	margin         : 0px auto;
`;

export default function App() {
	// const imperialURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271`;
	// const metricURL = `https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;
	// const metricURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;

	const metricURL = `https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;

	const [weatherURL, setWeatherURL] = useState(metricURL);
	const [weather, setWeather] = useState(null);

	// const [clockChecked, setClockChecked] = useState(false);
	// const [farenheitChecked, setFarenheitChecked] = useState(false);

	// function handleTemperatureScaleChange(farenheitChecked) {
	// 	setFarenheitChecked(farenheitChecked)
	// 	farenheitChecked ? setWeatherURL(imperialURL) : setWeatherURL(metricURL)
	// }


	useEffect(() => {
		async function fetchData() {
			const response = await fetch(weatherURL)
			const data = await response.json();
			setWeather(data)
		}
		fetchData()

		fetch(weatherURL)
			.then(response => response.json())
			.then(json => setWeather(json))
	}, [weatherURL])

	// trigger useEffect to re-run once real weather data is loaded
	if (weather === null) {
		return null;
	}

	return (
		<>
			<Wrapper>
				<LocationData
					weather={weather}
				/>
				<Settings
				// onTempChange={handleTemperatureScaleChange}
				// farenheitChecked={farenheitChecked}
				/>
				<div className="flexLayout">
					<WeatherToday
						weather={weather}
					// farenheitChecked={farenheitChecked}
					/>
					<WeatherTomorrow
						weather={weather}
					// farenheitChecked={farenheitChecked}
					/>
				</div>
				<WeatherForecast
					weather={weather}
				/>
			</Wrapper>
		</>
	)
}
