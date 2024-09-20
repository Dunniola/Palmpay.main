import React from 'react'
import NDIC from "/src/PHOTOS/Desktop view/NDIC IMAGE.png";
import NDICMobile from "/src/PHOTOS/Mobile view/NDIC.80dcf580.pngphone -view .png";

function Privacy() {
  return (
    <>
    <div className="bg-white relative top-80 flex justify-between px-20  items-center -z-10 text-2xl max-md:flex-col max-md:px-5">
    <div className='-z-10 md:w-1/2'>
        <img src={NDIC} alt="" className='max-md:hidden  3/5'/>
    </div>
    <div>
      <img src={NDICMobile} alt=""  className='md:hidden w-screen rounded '/>
    </div>

    <div className='px-10 max-md:px-5 max-md:pt-5 max-md:bg-gray-100 md:w-1/2'>
        <h2 className='font-bold text-4xl mb-10 max-md: pb-5'>Your privacy and security is our top priority</h2>
        <p className='text-xl text-justify max-md:text-sm max-md:relative max-md:bottom-5'>PalmPay is fully licensed as a Mobile Money Operator by CBN, and insured by NDIC. We manage customers' funds in compoliance with all application regulations.This means that our more than 30 million users and millions of businesses are protected.</p>
    </div>
    </div>
    </>
  )
}

export default Privacy