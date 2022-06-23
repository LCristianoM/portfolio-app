import React from 'react';
import { MapContainer } from 'react-leaflet';
import { Marker, Popup, TileLayer } from 'leaflet';

import './index.scss'

export const Map = () => {
  return (
    <>
      <MapContainer center={[5.82719, -73.03407]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[5.82719, -73.03407]}>
          <Popup>Aqui puedes encontrarme para charlar!!!</Popup>
        </Marker>
      </MapContainer>
    </>
  )
}
