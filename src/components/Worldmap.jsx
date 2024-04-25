import React from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';

const Worldmap = () => {
  return (
    <div style={{ width:"100vw",height:"95vh"}}>
      <Map defaultCenter={[51.505, 4.6997]} defaultZoom={3} width="100%" height="100%" animate>
        <Overlay anchor={[50.879,4.6997]} offset={[120,79]}></Overlay>
        <Marker anchor={[51.505, -0.09]} />
      </Map>
    </div>
  );
};

export default Worldmap;