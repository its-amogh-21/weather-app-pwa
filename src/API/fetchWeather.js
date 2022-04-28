import axios from "axios";

URL = "https://api.openweathermap.org/data/2.5/weather"
API_KEY = "7e20449b119bbf8fbb353ceeb5d37a2e"

const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        q: query,
        APPID:  API_KEY,
        units: 'mertic'
    });
    return data;
}

export default fetchWeather;