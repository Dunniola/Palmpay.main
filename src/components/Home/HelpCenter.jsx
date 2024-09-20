import React from 'react'
import Help from "/src/PHOTOS/Desktop view/Help center.png";

function HelpCenter() {
  return (
    <>
    <div className='flex flex-wrap items-center px-10 relative -bottom-96  -z-10 text-2xl bg-gray-50 max-md:flex-col-reverse max-md:bg-white max-md:px-2 max-lg:w-full '>

        <div className=' max-md:px-2  bg-gray-50 pb-10 w-1/2 max-md:w-full'>
            <h1 className='font-bold text-5xl mb-10 max-md:text-2xl max-md:mb-5 max-md:mt-10 '>We are happy to help</h1>
            <p className='mb-10 text-2xl mr-5 max-md:text-[20px] max-md:mb-3 leading-tight max-md:mr-0'>Browse topics, find resources, or chat with customer service. PalmPay support has answers to all your questions. Have an inquiry, or need Customer Service assistance?</p>

            <span className='max-md:text-[20px]'>Call us: +234 2018886888</span>
            <p className='max-md:text-[20px]'>Email: support @palmpay.com</p>

            <button className='bg-purple-700 text-white text-sm px-8 py-2 rounded-lg mt-5 '>Contact</button>
        </div>

        <div className='max-md:px-2 w-1/2 max-md:w-full
        '>
            <img src={Help} alt="" className='w-full px-2'/>
    
        </div>
    <div>

    </div>
    </div>
    
    </>
  )
}

export default HelpCenter