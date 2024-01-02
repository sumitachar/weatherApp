import './App.css';
import TopButtons from './componets/TopButtons';
import Inputs from './componets/Inputs';
import TimeLocation from './componets/TimeLocation';
import TemparatureAndDetails from './componets/TemparatureAndDetails';
import Forecast from './componets/Forecast';
import getFormattedWeatherData from './Services/WeatherService';

function App() {
  // const fetchWeather = async()=>{
  //   const data = await getFormattedWeatherData ({q:"Kolkata"});
  //   console.log("fetchWeather",data)
  // }
  // fetchWeather();


  return (
    <div className="App mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeLocation />
      <TemparatureAndDetails />
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
