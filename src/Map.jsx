import React from 'react'
import { MapContainer , TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationMarker from '../LocationMarker'

export default function Map() {
  const position = [32.4, 53.7]
  return (
    <>
    <MapContainer className='h-screen w-full' center={position} zoom={5}>
          <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
    </MapContainer>
    </>
  )
}
