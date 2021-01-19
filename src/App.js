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
	// const [error, setError] = useState(null);
	// const [isLoaded, setIsLoaded] = useState(false);
	// const [items, setItems] = useState([]);
	const [weather, setWeather] = useState(null);
	const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/43.585891,-79.5835271?units=si`;
	// const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${43.6532}&lon=${79.3832}&units=metric&exclude=hourly&appid=${process.env.REACT_APP_OW_KEY}`;


	useEffect(() => {
		async function fetchData() {
			const response = await fetch(weatherURL)
			const data = await response.json();
			setWeather(data)
		}
		fetchData();
		// fetch(weatherURL)
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		setWeather(data);
		// 		// return data;
		// 	}).catch(err => console.log(err))
	}, [])


	// whatever [] changes, hook is going to re-run

	console.log(weather)

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
