import React from 'react'
import googlePlay from "/src/PHOTOS/Desktop view/Google play dark.png";
import appStore from "/src/PHOTOS/Desktop view/App store darrk.png";
import bank from "/src/PHOTOS/Desktop view/Centrral bank.png";
import NDIC  from "/src/PHOTOS/Desktop view/NDIC 2X.png";

function Finance() {
  return (
    <>
    <div className='min-h-100 grid place-content-center my-20  px-20 text-center -z-10 max-md:px-5'>
        <h1 className='font-extrabold text-[120px] italic max-md:text-[40px]'>Say yes to <span className='text-purple-500'>more!</span></h1>
        <p className='text-2xl mt-16 max-md:text-[18px] tracking-tight max-md:mt-10 leading-tight'>Seamlessly send and receive money. effortlessly pay your bills, shop anywhere with ease, and take full control of your finances - all in Palmpay</p>

        <div className="flex gap-5 place-content-center mt-16 max-md:mt-10">
            <img src={googlePlay} alt="" className=''/>
            <img src={appStore} alt="" />
        </div>

        <div className="flex place-content-center gap-10 mt-10 text-3xl max-md:text-lg">
            <div className="flex items-center gap-2 ">
            <p className='max-md:text-base'>Licensed by CBN as a MMO</p>
            <img src={bank} alt="" className='w-10 h-10 max-md:w-5 max-md:h-6 max-md:ml-0.5'  />
            </div>
            <div className="flex items-center gap-2 text-3xl max-md:text-lg">
            <p className=''> Deposits Insured by</p>
            <img src={NDIC} alt=""className='w-16 h-10 max-md:text-[10px] nmax-md:ml-2'/>

            </div>
        </div>
    </div>
    </>
  )
}

export default Finance