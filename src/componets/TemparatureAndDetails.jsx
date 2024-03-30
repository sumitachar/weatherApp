import React, { useEffect } from 'react';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from '@iconscout/react-unicons'


const TemparatureAndDetails = ({ data, tempScale }) => {
  // console.log("fetchWeather===",data?.main?.temp)

  return (
    <div className='w-full p-3.5'>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>{data?.weather[0]?.main}</p>
      </div>
      <div className='flex flex-row w-full items-center justify-between text-white py-3'>
        <div></div>
        <div className='flex flex-row w-2/4 items-center'>
          <div className='w-1/5' > <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' /></div>
          <p className='text-base w-auto' ><span className='text-red-400'>Temparature : </span>{tempScale ? <>{(data?.main?.temp)?.toFixed(2)}°cel</> : <>{((data?.main?.temp * 9 / 5) + 32)?.toFixed(2)}°F</>}</p>
        </div>
        <div className='flex flex-col space-y-2 w-2/4'>
          <div className='flex font-light text-sm item-center justify-center'>
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className='font-medium ml-1'>{tempScale ? <>{(data?.main?.feels_like)?.toFixed(2)}°C</> : <>{((data?.main?.feels_like * 9 / 5) + 32)?.toFixed(2)}°F</>}</span> {/* option+shift+8 = degree sign */}
          </div>
          <div className='flex font-light text-sm item-center justify-center'>
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className='font-medium ml-1'>{data?.main?.humidity}%</span> {/* option+shift+8 = degree sign */}
          </div>
          <div className='flex font-light text-sm item-center justify-center'>
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className='font-medium ml-1'>{data?.wind?.speed} km/h</span> {/* option+shift+8 = degree sign */}
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full items-center justify-center space-x-1 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light w-1/5'>
          Sunrise <span className='font-medium ml-1'>{new Date(data?.sys?.sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span></p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light w-1/5' >
          Sunset <span className='font-medium ml-1'>{new Date(data?.sys?.sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span></p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light w-1/5'>
          High <span className='font-medium ml-1'>{tempScale ? <>{(data?.main?.temp_max)?.toFixed(2)}°C</> : <>{((data?.main?.temp_max * 9 / 5) + 32)?.toFixed(2)}°F</>}</span></p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light w-1/5'>
          Low <span className='font-medium ml-1'>{tempScale ? <>{(data?.main?.temp_min)?.toFixed(2)}°C</> : <>{((data?.main?.temp_min * 9 / 5) + 32)?.toFixed(2)}°F</>}</span></p>
        <p className='font-light'>|</p>

      </div>

    </div>
  )
}

export default TemparatureAndDetails
