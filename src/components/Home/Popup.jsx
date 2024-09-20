import React from 'react'
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Popup() {
    const [isVisible, setIsVisible] = useState(false);

  // Show popup when the component mounts (on site visit)
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle closing the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  

  return (
    isVisible &&(
    <>
    <div className=' fixed bottom-0 bg-purple-700 text-white px-16 max-md:px-5'>
        <div className="flex justify-between items-center">
        <h2 className='text-2xl font-bold pt-5 mb-5'>How We Use Your Cookies</h2>
        <FaTimes className ="text-4xl relative  rounded-full  left-14 max-md:left-0"  onClick={closePopup}/>
        </div>
        <p className='text-[16px] leading-tight'>This site uses cookies to improve your experience and values your privacy. Deleting cookies will reset your preferences, treating you as a new visitor when you visit again. We use cookies to provide a secure environment, offer requested products/services, enhance performance, and tailor offerings to your needs for a better online experience.</p>

        <div className="flex gap-10 mt-5 pb-5">
            <button className='bg-white text-purple-600 border-1 rounded-lg px-8 py-1 font-bold'>Yes, i accept</button>
            <button className='text-white border-2 rounded-lg px-8 py-1 font-bold'>No. reject all</button>
        </div>
    </div>
    
    </>
    )
  )
}

export default Popup