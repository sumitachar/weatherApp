import './App.css';
import TopButtons from './componets/TopButtons';
import Inputs from './componets/Inputs';
import TimeLocation from './componets/TimeLocation';
import TemparatureAndDetails from './componets/TemparatureAndDetails';
import Forecast from './componets/Forecast';
import getFormattedWeatherData from './Services/WeatherService';
import { useEffect, useState } from 'react';
import Topbar from './componets/Topbar';

function App() {
  const [selectedCity, setSelectedCity] = useState("Kolkata")
  const [tempScale, setTempscale] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await getFormattedWeatherData(selectedCity);
      setData(response)

    }
    fetchWeather();
  }, [selectedCity])

  const handleCityChange = (newData) => {
    // console.log("newData",newData)
    setSelectedCity(newData);
  };

  const handleSelectCity = (cityname) => {
    setSelectedCity(cityname)
  }


  return (
    <div className="flex flex-col App w-screen h-screen items-center justify-between pb-3.5  leading-3  shadow-gray-400">
      <Topbar />
      <div className='flex z-10 flex-col justify-items-center items-center w-9/12 h-9/12 backdrop-blur backdrop-grayscale-0 bg-white/10 rounded-2xl backdrop-opacity-10 shadow-2xl mix-blend-darken'>
        <TopButtons onSelectCity={handleSelectCity} selectedCity={selectedCity} />
        <Inputs onCityChange={handleCityChange} setTempscale={setTempscale} tempScale={tempScale} />
        <TimeLocation location={selectedCity} data={data} />
        <TemparatureAndDetails data={data} tempScale={tempScale} />
      </div>
      {/* <Forecast title="hourly forecast"/> */}
      {/* <Forecast title="daily forecast"/> */}
    </div>
  );
}

export default App;
