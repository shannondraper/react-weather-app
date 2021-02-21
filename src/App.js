import './App.scss';
import React, { useEffect, useState, setState } from 'react';
import styled from 'styled-components';
import LocationData from './components/LocationData';
import WeatherToday from './components/WeatherToday';
import WeatherTomorrow from './components/WeatherTomorrow';
import WeatherForecast from './components/WeatherForecast';
import fetch from 'node-fetch';
import { WiDaySunny } from 'react-icons/wi';
import axios from 'axios';


const Wrapper = styled.main`
	display        : flex;
	flex-direction : column;
	margin         : 0px auto;
`;
const LoadingText = styled.p`
	text-align: center;
`;

export default function App() {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);

	// api data from proxied url
	const apiURL = 'https://express-weather-api.herokuapp.com/';

	const fetchAPIData = async () => {
		try {
			await axios
				.get(apiURL)
				.then(response => {
					console.log(response)
					setWeather(response.data)
				})
			setLoading(false);
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchAPIData();
	}, [])

	return (
		<>
			{
				loading
					? <>
						<WiDaySunny className="spin" />
						<LoadingText>LOADING</LoadingText>
					</>
					: <Wrapper>
						<LocationData
							weather={weather}
						/>
						<div className="flexLayout">
							<WeatherToday
								weather={weather}
							/>
							<WeatherTomorrow
								weather={weather}
							/>
						</div>
						<WeatherForecast
							weather={weather}
						/>
					</Wrapper>
			}
		</>
	)
}
