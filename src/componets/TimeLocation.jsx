import React,{useEffect, useState } from 'react';

const TimeLocation = ({location,data}) => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const interval = setInterval(() => {
      const currentDateObj = new Date();
      const dayOfWeek = daysOfWeek[currentDateObj.getDay()];
      const currentDate = currentDateObj.toLocaleDateString();
      const currentTime = currentDateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      setTime(currentTime);
      setCurrentDay(dayOfWeek);
      setCurrentDate(currentDate);
    }, 1000); // Update every second

    return () => clearInterval(interval); 

    // const currentDateObj = new Date();
    // const dayOfWeek = daysOfWeek[currentDateObj.getDay()];
    // setTime(currentTime);
    // setCurrentDay(dayOfWeek);
    // setCurrentDate(date);
  }, []); 

  return (
    <div className='pr-3.5 pl-3.5'>
      <div className='flex items-center justify-center my-6'>
         <p className='text-white text-xl font-extralight'>
         {currentDay}, {currentDate} | Local time: {time}
         </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>{location}, {data?.sys?.country}</p>

        </div>
    </div>
  )
}

export default TimeLocation
