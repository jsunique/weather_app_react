import React, { useState } from 'react'
import { useMapEvent } from 'react-leaflet'

export default function LocationMarker() {
  const [position , setPosition] = useState(null);
  const map = useMapEvent({
    click(e) {
      setPosition(e.latlng);
    }
  })
  return (
    <>
    </>
  )
}
