import React,{useState} from 'react'

const TopButtons  = ({ onSelectCity,selectedCity }) => {
  const [selectedId, setSelectedId]=useState(1)

    const cities =[
        {
            id:1,
            title:'Kolkata'
        },
        {
            id:2,
            title:'London'
        },
        {
            id:3,
            title:'Sydney'
        },
        {
            id:4,
            title:'Dhaka'
        },
        {
            id:5,
            title:'Paris'
        },
    ]
  return (
    <div className='flex items-center w-full justify-around my-6 pr-3.5 pl-3.5'>
      {cities.map((city)=>(
        
        <button
      key={city.id}
      onClick={() => {
        onSelectCity(city.title);
        setSelectedId(city.id);
      }}
      className='text-white text-lg font-medium font-serif'
      style={{color:((city.id===selectedId)&&(selectedCity===city.title))||(selectedCity===city.title)?'yellow':''}}
    >
      {city.title}
    </button>
      ))}
    </div>
  )
}

export default TopButtons
