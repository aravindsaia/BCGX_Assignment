import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { CiGlobe,CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between bg-slate-900 text-white text-xl'>
        <div className='flex justify-start items-center ml-5'>
        <IoMenuOutline/>
        <p>Webapp</p>
        </div>
        <div className='flex justify-end items-center mr-5'>
            <CiGlobe/>
            <CiUser/><p>user</p>

        </div>

    </nav>
    </>
  )
}

export default Navbar