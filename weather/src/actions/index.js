const API_KEY = '3efecca63fe33ac21873abf7269f5a5a';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
	return {
		type: FETCH_WEATHER
	};
}