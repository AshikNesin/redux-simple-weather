import axios from 'axios';
const API_KEY="88c319f7d531101c421718f885f87a8b";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&mode=json&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);
	return {
		type:FETCH_WEATHER,
		payload:request
	};
}
