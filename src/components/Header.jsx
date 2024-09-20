import React from 'react'
import { Link } from "react-router-dom";
import Palmpay from "/src/PHOTOS/Desktop view/Palmpay logo.png";
import NigeriaLogo from "/src/PHOTOS/Desktop view/NG.png.png";
import arrowDown from "/src/PHOTOS/Desktop view/Arrow-down.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";




function Header() {

  const[openMenu, setOpenMenu] = useState(false )

  const toggleMenu = () =>{
    setOpenMenu(!openMenu)
  }
  return (
    <>
    <Link to ={"/"}>
    <div className="main-container flex h-14 items-center gap-16 px-16 max-md:px-5 bg-white z-1000 fixed top-0 left-0 w-full ">
      <img src={Palmpay}alt="" className=''/>

      <div className="menu-icon fixed right-2 text-2xl md:hidden" onClick={toggleMenu}>
        {openMenu ? <FaTimes/> : <FaBars/>}
 
      </div>
      <div className={`rounded-md max-md:absolute max-md:top-[3rem] bg-white max-md:shadow-xl max-md:h-[100vh] max-md:w-screen md:hidden max-md:right-[-1rem] max-md: ${openMenu ? 'block' : 'hidden'}`}>

      <ul className="flex gap-10 max-md:block max-md:mt-10 max-md:ml-8 ">
        
        
        <li className='max-md:mt-10 max-md:text-2xl'>Company</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Business</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Personal</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Developers</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Pricing</li>
      </ul>
      </div>

      <div className="rounded-md">

      <ul className="flex gap-16  max-md:mt-10 max-md:ml-8 max-md:hidden text-lg">
        
        
        <li className='max-md:mt-10 max-md:text-2xl'>Company</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Business</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Personal</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Developers</li>
        <li className='max-md:mt-10 max-md:text-2xl'>Pricing</li>
      </ul>
      </div>
      <div className='flex justify-between items-center gap-3  bg-gray-100 ml-40 pr-3 py-1 max-md:mx-5 rounded-full pl-5 fixed md:right-10 max-md:right-10 z-10'>
        <img src={NigeriaLogo} alt="" />
        <span className='max-md:hidden'>Nigeria</span>
        <img src={arrowDown} alt="" className='pr-1 max-md:pr-0  md:relative md:right-3 '/>

      </div>
      
        
      </div>
        
    
    </Link>
    
    </>
  )
}

export default Header