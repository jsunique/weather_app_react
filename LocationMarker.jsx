import React, { useState } from 'react'
import { useMapEvent,Popup } from 'react-leaflet'

export default function LocationMarker() {
  const [position , setPosition] = useState(null);
  const map = useMapEvent({
    click(e) {
      setPosition(e.latlng);
    }
  })
  return (
    <>
    {
      position && (
        <Popup position={position}>
          Weather predict for this location?
          <button className='border-2 hover:bg-green-400 cursor-pointer'>✓</button>  
        </Popup>
      )
    }
    </>
  )
}
