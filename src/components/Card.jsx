import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from './Chart'
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { cityDataContext } from '../dataContext/DataContext';

const Card = ({ item }) => {
    // console.log("item",item)
    let citydata = useContext(cityDataContext)
    let {  cityName, pop, amt, uv, pv,id } = item
    return (

        < Link to={`/detailview/${id}`} >
        <div className='border rounded h-52 w-44 flex-shrink-0 p-3'>
            <div>
                <h5>{cityName}</h5>
                {/* <br /> */}
                <p>Forecast</p>
                <div className='flex items-center'>
                    <p>{pop}</p> <Chart id={id} /> <IoIosArrowRoundUp className='text-3xl text-green-600' /> <br />
                </div>
                <p>Forecast</p>
                <div className="flex items-center">

                    <p>{amt}</p> <Chart id={id} /> <IoIosArrowRoundDown className='text-3xl text-red-600' />
                </div>
            </div>
        </div>

        </Link >
    )
}

export default Card