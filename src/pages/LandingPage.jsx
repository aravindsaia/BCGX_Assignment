import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { cityDataContext } from '../dataContext/DataContext'
import worldmap from '../assets/worldmap.jpg'
import Worldmap from '../components/Worldmap'
import { Map, Marker, Overlay } from 'pigeon-maps';
import { Tooltip } from 'recharts'

const LandingPage = () => {
  let [zoom, setZoom] = useState(0)
  let x = useContext(cityDataContext)

  const citydata = [{ cityName: "Cairo", lat: 30.0444, long:31.2346, uv: 2000, pv: 9800,pop:"8.1M" }, 
  { cityName: "Casablanca", lat: 33.5731, long: -7.5898, uv: 1500, pv: 7500 ,pop:"12M"}]
  // console.log(x)
  useEffect(() => {
    setTimeout(() => setZoom(1), 100)
  }, [])
  return (
    <>
      <Navbar />
      {/* <div className="text-3xl text-center">LandingPage</div> */}
      {/* <div className="bg-cover bg-center h-screen" style={{backgroundImage:`url(${worldmap})`, transform:`scale(${zoom})`, transition:"transform 2s ease"}}> */}
      <div style={{ width: "100vw", height: "95vh" }}>
        <Map defaultCenter={[49.505, 4.6997]} defaultZoom={3} width="100%" height="100%" animate>
          <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}></Overlay>
          {citydata.map((item, i) => {
           return <Marker anchor={[item.lat, item.long]} >
              {/* //Tooltip for two cities */}
              <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                <p>{item.cityName}</p>
                <p>{item.pop}</p>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
            </Marker>

          })}
          <div className='flex m-5'>
            <h2>Hello User,</h2>
            <button className='bg-blue-500'>You have 2 actions</button>
          </div>
          <br />
          <br />
          <div className='flex justify-evenly flex-wrap'>

          </div>
          <div className=' flex gap-4 overflow-x-auto p-4 ml-5'>
            {x.map((item, i) => {
              return <Card item={item} />

            })}
          </div>
        </Map>
      </div>
    </>
  )
}

export default LandingPage