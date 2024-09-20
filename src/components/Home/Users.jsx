import React from 'react'
import GooglePlay from "/src/PHOTOS/Desktop view/Google play.png";
import appStore from "/src/PHOTOS/Desktop view/App store.png";

function Users() {
  return (
    <>
     <div className="flex bg-purple-500 relative mt-[500px] items-center place-content-center justify-between py-3 max-md:block max-md:px-2 w-screen md:px-10 max-md:text-base">
        <div>
        <h2 className='text-white text-2xl font-bold'>join <span className='font-extrabold max-md:mb-5'>30+ million</span> users who love PalmPay</h2>
        </div>
        <div className='flex gap-3 mt-5'>
            <div>
            <img src={GooglePlay} alt="" />
            </div>
            <div>
                <img src={appStore} alt="" />
            </div>
        </div>
     </div>
    </>
  )
}

export default Users