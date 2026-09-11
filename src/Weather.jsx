import React, { useState } from 'react'
import { useEffect } from 'react';
import {  useLocation } from 'react-router'
import background_night from './assets/background-night.png'
import background_day from './assets/background-day.png'

export default function Weather() {
  const location = useLocation();
  const lat = location.state.lat;
  const lng = location.state.lng;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  const [update , setUpdate] = useState(null);

  const [data , setData] = useState([]);

  const sendRequest = async()=>{
    const request = await fetch(API);
    const data2 = await request.json();
    getData(data2)
  }


  const getData =  (res) => {
    const isNight = res.weather[0].icon.endsWith("n");
    setUpdate({
      city:res.name,
      feelsLike:res.main.feels_like,
      humidity:res.main.humidity,
      wind:res.wind.speed,
      temp:res.main.temp,
      descripton:res.weather[0].description,
      icon:`https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
      isNight,
    })
  };

  useEffect(()=>{
    sendRequest();
  },[])

    if(!update){
      return (
        <>
        <p>data is not ready</p>
        </>
      )
    }



  return (
    <>
    <div className='flex items-center w-full  h-screen bg-center bg-cover bg-no-repeat bg-[url("./assets/fullpage-bg.png")]
    '>
      <div style={{backgroundImage:`url('${update.isNight ?  background_night : background_day}')`}} className='bg-center bg-cover rounded-3xl w-[85%] sm:w-[60%] h-[90%] mx-auto  flex flex-col items-center'>
        <p className='text-4xl font-[bozorg] pt-10 text-white'>{update.city}</p>
        <div className='flex justify-center w-full'>
          <img className='w-40 h-45 sm:w-50 sm:h-60' src={update.icon} />
        </div>

        <div className='flex flex-col sm:flex-row md:justify-evenly gap-10 justify-between w-full px-5 items-center'>

          <div className='flex items-center gap-4'>
            <p className='text-white font-[kam] text-[18px]'>{update.temp}</p>
            <div className='flex flex-col'>
              <p className='text-white font-[kam] text-[18px]'>°C | °F </p>
              <p className='text-white font-[kam] text-[18px]'>{update.descripton}</p>
            </div>
          </div>


          <div className='flex flex-col'>
            <p className='text-white font-[kam] text-[18px]'>Feels like: {update.feelsLike}°C</p>
            <p className='text-white font-[kam] text-[18px]'>Humidity: {update.humidity}%</p>
            <p className='text-white font-[kam] text-[18px]'>Wind: {update.wind}</p>
          </div>
        </div>
     
     
      </div>
    </div>
    </>
  )
}
