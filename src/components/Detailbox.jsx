import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";



const Detailbox = () => {
    return (
        <>
            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <button className='border flex items-center  bg-slate-200 text-black rounded-sm font-semibold'><IoIosArrowRoundDown style={{ fontSize: "25px" }} />F'CAST STAB.</button>
                    <button className='border flex items-center bg-slate-200 text-black rounded-sm font-semibold'><IoIosArrowRoundUp style={{ fontSize: "25px" }} />F'CAST ACC.</button>
                </div>
                <div className=" text-xl text-cyan-400">
                    <IoMailUnreadOutline />
                </div>
            </div>
            <div className="pl-5">
                Sample Stack
            </div>
            <hr className='border-0.2 border-slate-400'/>
        </>
    )
}

export default Detailbox