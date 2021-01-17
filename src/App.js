import './App.scss';
import styled from 'styled-components';
import LocationData from './components/LocationData';
import WeatherToday from './components/WeatherToday';
import WeatherTomorrow from './components/WeatherTomorrow';
import WeatherForecast from './components/WeatherForecast';

const Wrapper = styled.main`
	/* border: 1px solid white; */
	width: 900px;
    /* width: 90%; */
    display: flex;
    flex-direction: column;
    margin: 0px auto;
`;


function App() {
	return (
		<>
			<Wrapper>
				<LocationData />
				<div className="flexLayout">
					<WeatherToday />
					<WeatherTomorrow />
				</div>
				<WeatherForecast />
			</Wrapper>
		</>
	);
}

export default App;
