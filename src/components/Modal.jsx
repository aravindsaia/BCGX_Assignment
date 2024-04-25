import React, { useContext } from 'react'
import { IoMdArrowBack} from "react-icons/io";
import {IoFilterSharp} from 'react-icons/io5'
import Detailbox from './Detailbox';
import { Link, useNavigate } from 'react-router-dom';
import { cityDataContext } from '../dataContext/DataContext';
const Modal = ({id}) => {
    let navigate=useNavigate()
    let data=useContext(cityDataContext)
    return (
        <>
            
            <div className=" border p-4 bg-cyan-950 flex flex-wrap flex-col text-white">
                <IoMdArrowBack onClick={()=>{navigate('/')}}/>
                <br />
                <div className="flex gap-1">
                    {
                        Array.from({length:5},(_,index)=>{
                            return <button className='bg-cyan-300 border px-3 py-2 rounded-md' key={index} ></button>
                        })
                    }
                </div>
                <br />
                <h6>Sample Stack</h6>
                <div className="flex gap-3 text-sm">
                    <button>BACKLOG (238)</button>
                    <button>PENDING(0)</button>
                    <button>FINAL SIGN-OFF(0)</button>
                </div>
                <div className="flex items-center p-3">
                Filter<IoFilterSharp />
                </div>
                {
                    data.map((item,i)=>{
                        return <Link key={i} to={`/detailview/${i}`}>
                        <Detailbox />
                        </Link>
                    })
            
                }
                </div>
        </>
    )
}

export default Modal