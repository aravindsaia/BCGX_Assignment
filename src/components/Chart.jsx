import React, { useContext, useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { cityDataContext } from '../dataContext/DataContext';
import { chartDataContext } from '../dataContext/ChartContext';


const Chart = ({id}) => {
    let data=useContext(cityDataContext)
    let {arrForecast,arrHist}=useContext(chartDataContext) 
    // console.log("citydata",data) 
    let historyData= arrHist[id]?.map(x=>({uv:x}))
//    console.log(historyData,"HD")

   let forecastData= arrForecast[id]?.map(x=>({pv:x}))
   let combinedData= historyData?.map((e,i)=>({...e,...forecastData[i]}))
//    console.log(combinedData,"CD")
    // let {pv,uv}=data
  return (
    <LineChart width={230} height={50} data={combinedData}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  {/* <XAxis dataKey="name" />
  <YAxis /> */}
  <Tooltip />
  {/* <Legend /> */}
  <Line type="monotone" dataKey='uv' stroke="#06590d" dot={false}/>
  <Line type="monotone" dataKey='pv' stroke="#e8e825" />
</LineChart>
  )
}

export default Chart

