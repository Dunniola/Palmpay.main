import React from 'react'
import Financial from "/src/PHOTOS/Desktop view/Financial.png";
import payBills  from "/src/PHOTOS/Desktop view/payBills.0efc6845.png.png";
import MobileFinance from "/src/PHOTOS/Mobile view/makeFinancialPhone.4b43681a.png.png";
import MobileBills from "/src/PHOTOS/Mobile view/payBillsPhone.5b0002a9.png.png";

function Service() {
  return (
    <>
    <div className=" bg-black relative top-60 -z-10 max-md:top-50 ">
        <div className="flex place-content-center px-16">
            <img src={Financial} alt="" className='relative bottom-80 max-md:bottom-[150px] max-md:hidden'/>

            <div className='md:hidden relative bottom-48'>
              <img src={MobileFinance} alt="" />
            </div>
        </div>

    <div className='text-white text-center relative bottom-40 px-16 '>
        <h2 className='text-5xl mb-10 text-purple-400 max-md:text-[30px] max-md:mt-8'>Do more with your money</h2>
        <p className='text-2xl max-md:text-sm max-md:-mt-2'>More than transferring money. You can do all kinds of cool stuff - pay your bills, make purchase , save and earn, all financial needs in one palmPay app.</p>
    </div>
    <div className='grid place-content-center max-md:hidden px-16'>
    <img src={payBills} alt="" />
   </div>

   <div className=''>
    <img src={MobileBills} alt="" className='grid place-content-center relative bottom-28 md:hidden  w-full px-10' />
   </div>

    </div>
    </>
  )
}

export default Service