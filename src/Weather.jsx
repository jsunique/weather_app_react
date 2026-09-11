import React, { useState } from 'react'
import { useEffect } from 'react';
import {  useLocation } from 'react-router'

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
    <p className='h-15 w-50 bg-green-600'></p>
    </>
  )
}
