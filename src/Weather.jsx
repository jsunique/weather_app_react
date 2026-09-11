import React from 'react'
import { useEffect } from 'react';
import {  useLocation } from 'react-router'

export default function Weather() {
  const location = useLocation();
  const lat = location.state.lat;
  const lng = location.state.lng;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`


  const sendRequest = async()=>{
    const request = await fetch(API);
    const data = await request.json();
    console.log(data);
  }

  useEffect(()=>{
    sendRequest();
  },[])
  return (
    <p>vahid yazdani</p>
  )
}
