
// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

const getFormattedWeatherData =async (searchParam)=>{
    // console.log("urllll",searchParam);
    const BASE_URL=`https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=8d7a497e88ae31d265d87ff43598cd8c`

    const response = await fetch(BASE_URL);
    // const last4HourData = response;
    const formattedCurrentWeather =await response.json();
    console.log("formattedCurrentWeather",formattedCurrentWeather)
    return formattedCurrentWeather;
}

export default getFormattedWeatherData;