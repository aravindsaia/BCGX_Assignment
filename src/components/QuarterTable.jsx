import React, { useContext } from 'react'
import { cityDataContext } from '../dataContext/DataContext'
import { chartDataContext } from '../dataContext/ChartContext'

const QuarterTable = ({ id }) => {
  // console.log(id,'id')
  let data = useContext(cityDataContext)
  let { arrHist, arrForecast } = useContext(chartDataContext)
  return (
    <>
      <table>
        <tbody style={{border:"1px solid black"}}>

          <tr>
            <td>Historical Data</td>
            {arrHist[id]?.map((e, i) =>
              <td key={i} style={{ padding: "8px", border: '1px solid black' }}>{e}</td>)}
          </tr>
          <tr>
            <td>Forecast Data</td>
            {arrForecast[id]?.map((e, i) =>
              <td key={i} style={{ padding: "8px", border: '1px solid black' }}>{e}</td>)}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default QuarterTable