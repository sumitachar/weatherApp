
import React,{ useEffect, useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import axios from 'axios';

const Inputs  = ({ onCityChange,setTempscale,tempScale }) =>  {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [cityName, setCityName]=useState(" ")
  const [click, setClick]=useState(true)

  useEffect(()=>{
    onCurrentLocation()
  },[click])




  const handleLocationSearch = async () => {
    if (latitude !== '' && longitude !== '') {
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=58a87770927b447da7a0b6e99b0af8ac`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const city = data?.results[0]?.components?.city;      ;
        // console.log("cityName",cityName,latitude,longitude,data.results)
        // setCityName(city);
        onCityChange(city)
      } catch (error) {
        console.error('Error fetching location:', error);
        setCityName(cityName);
        onCityChange(cityName)
      }
    }
  };

  const handleCityName = (city)=>{
    setCityName(city)
  }

  const onCurrentLocation=() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          handleLocationSearch()
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  


  return (
    <div className='flex flex-row justify-center my-6 w-full pr-3.5 pl-3.5'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type='text'
            placeholder='Search for city...' 
            className='text-xl font-light p-2 pl-5 w-3/5 h-8 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-2xl' 
            onChange={(event)=>{handleCityName(event.target.value)}}
            value={cityName}
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={()=>{onCityChange(cityName);setCityName('')}}/>
            <div className='flex w-2/5 justify-center'>

            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"  onClick={()=>{setClick(!click)}} />
            <div className='flex flex-row w-2/3 items-center justify-center '>
                <button name='metric' className='text-xl text-white font-light' onClick={()=>{setTempscale(true)}} style={{color:tempScale==true?'yellow':''}}>°C</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial' className='text-xl text-white font-light' onClick={()=>{setTempscale(false)}} style={{color:tempScale==false?'yellow':''}}>°F</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Inputs
