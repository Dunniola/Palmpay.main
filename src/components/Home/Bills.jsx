import React from 'react'
import Coupons from "/src/PHOTOS/Desktop view/Coupons.png";
import mobileCoupon from "/src/PHOTOS/Mobile view/Coupons.png";



function Bills() {
  return (
   <>
   <div className='bg-black relative top-60 text-center px-2 max-md:px-2 -z-10 m'>
    <h2 className='text-orange-200  text-5xl pt-40 mb-5 font-bold max-md:text-[30px] max-md:relative max-md:bottom-32'>Earn as you spend with rewards </h2>
    <p className='text-orange-50 text-2xl max-md:text-[20px] leading-tight max-md:relative max-md:bottom-28'>With Palmpay, every expense becomes an opportunity to save. Unlock exclusive discounts and cashback rewards with transaction you make. Embrance cashless payment and make every payment count with PalmPay.</p>
    <div className='grid place-content-center pb-20 px-10'>
        <img src={Coupons} alt=""  className='max-md:hidden'/>
    </div>
    <div>
    <img src={mobileCoupon} alt="" className='md:  max-md:relative max-md:bottom-20 grid place-content-center md:hidden w-full' />
    </div>
    
   </div>
   </>
  )
}

export default Bills