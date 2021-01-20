import './App.scss';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LocationData from './components/LocationData';
import WeatherToday from './components/WeatherToday';
import WeatherTomorrow from './components/WeatherTomorrow';
import WeatherForecast from './components/WeatherForecast';

const Wrapper = styled.main`
	display        : flex;
	flex-direction : column;
	margin         : 0px auto;
`;

export default function App() {
	const [weather, setWeather] = useState(null);
	const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;

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
	}, [])

	// trigger useEffect to re-run once real weather data is loaded
	if (weather === null) {
		return null;
	}

	return (
		<>
			<Wrapper>
				<LocationData weather={weather} />
				<div className="flexLayout">
					<WeatherToday weather={weather} />
					<WeatherTomorrow weather={weather} />
				</div>
				<WeatherForecast weather={weather} />
			</Wrapper>
		</>
	)
}
