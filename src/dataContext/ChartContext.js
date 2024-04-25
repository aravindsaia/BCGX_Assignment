import React, { createContext, useContext } from 'react'
import { cityDataContext } from './DataContext'

export let chartDataContext=createContext()

const ChartContext = ({children}) => {
   let data= useContext(cityDataContext)
    let arrHist=[]
    let arrForecast=[]
    for(let i=0;i<data.length;i++)
    {
      arrHist.push(Object.values(data[i].historical))
     }
    //  console.log(arrHist)
    for(let j=0;j<data.length;j++)
   {
     arrForecast.push(Object.values(data[j].forecast))
   }
  return (
    <chartDataContext.Provider value={{arrHist,arrForecast}}>
        {children}
    </chartDataContext.Provider>
  )
}

export default ChartContext