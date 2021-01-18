import './App.scss';
import React, { Component } from 'react'
import styled from 'styled-components';
import LocationData from './components/LocationData';
import WeatherToday from './components/WeatherToday';
import WeatherTomorrow from './components/WeatherTomorrow';
import WeatherForecast from './components/WeatherForecast';

const Wrapper = styled.main`
	max-width      : 900px;
	width          : 90%;
	display        : flex;
	flex-direction : column;
	margin         : 0px auto;
`;

class App extends Component {
	componentDidMount() {
		// cors-anywhere.herokuapp may not be secure, probably not best for real production apps
		fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/43.585891,-79.5835271?units=si`)
			.then(res => res.json())
			.then((data) => {
				this.setState({ weather: data })
				console.log(data)
			})
			.catch(console.log)
	}
	render() {
		return (
			<Wrapper>
				<LocationData />
				<div className="flexLayout">
					<WeatherToday />
					<WeatherTomorrow />
				</div>
				<WeatherForecast />
			</Wrapper>
		);
	}
}

// function App() {
// return (
// 	<>
// 		<Wrapper>
// 			<LocationData />
// 			<div className="flexLayout">
// 				<WeatherToday />
// 				<WeatherTomorrow />
// 			</div>
// 			<WeatherForecast />
// 		</Wrapper>
// 	</>
// );
// }

export default App;
