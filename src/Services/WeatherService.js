const API_KEY = "8d7a497e88ae31d265d87ff43598cd8c";
const BASE_URL= "api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    // const url = new URL("api.openweathermap.org/data/2.5/weather?")
    // url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    const params1 = new URLSearchParams(url.search);
    console.log("url",infoType)

    return fetch(url).then((res)=>res.json())
  }
  
  const formatCurrentWeather = (data) => {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data
  
    const { main: details, icon } = weather[0]
    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      details,
      icon,
      speed,
    }
  }

const getFormattedWeatherData =async (searchParam)=>{
    // console.log("urllll",searchParam);
    const formattedCurrentWeather = await getWeatherData('weather',searchParam)
    .then(formatCurrentWeather)

    return formattedCurrentWeather;
}

export default getFormattedWeatherData;