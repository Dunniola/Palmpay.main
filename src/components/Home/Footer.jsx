import React from "react";
import NG from "/src/PHOTOS/Desktop view/centralBank.e14647d7.png.png";
import PCI from "/src/PHOTOS/Desktop view/PCI.61c854da.png.png";
import NDIC from "/src/PHOTOS/Desktop view/NDIC.png";
import NDPC from "/src/PHOTOS/Desktop view/NDPC.png";
import Palmpay from "/src/PHOTOS/Desktop view/Palmpay logo light.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className=" bg-black">
        <div className="flex pt-8 gap-5 place-content-center max-md:flex-col max-md:px-2 md:justify-between px-10">
          <div className="">
            <img src={Palmpay} alt="" className="mb-5" />
            <img src={NG} alt="" className="bg-white rounded-lg" />

            <img src={PCI} alt="" className="bg-white rounded-lg mt-5 " />

            <img src={NDIC} alt="" className="bg-white mt-5 rounded-lg" />

            <img src={NDPC} alt="" className="bg-white mt-5 rounded-lg " />
          </div>
          <hr className=" border-slate-600"/>

          <div className="text-white">
            <h2>Personal</h2>
            <ul>
              <li>PalmPay App</li>
              <li>Send and Receive Money</li>
              <li>Bill Payment</li>
              <li>Buy and Shop</li>
            </ul>
          </div>
          <hr className=" border-slate-600"/>

          <div className="text-white">
            <h2>Business</h2>
            <ul>
              <li>Payin</li>
              <li>Payout</li>
              <li>POS</li>
              <li>Pay with Transfer</li>
              <li>Business Account</li>
              <li>Management</li>
              <li>Agent Network</li>
            </ul>
          </div>
          <hr className=" border-slate-600"/>

          <div className="text-white">
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Press and Media</li>
              <li>Contact</li>
            </ul>
          </div>
          <hr className=" border-slate-600"/>

          <div className="text-white">
            <h2>Legal</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Complaints</li>
            </ul>
          </div>
          <hr className=" border-slate-600"/>
        </div>
        <div className="flex  space-x-4 p-4 flex-end bg-black w-screen place-content-end pr-20 max-md:place-content-start max-md:px-2 max-md: mb-5 mt-2">
          <FaX className="text-red text-2xl bg-white rounded-full py-1" />
          <FaFacebook className="text-red text-2xl bg-white rounded-full py-1" />
          <FaInstagram className="text-red text-2xl bg-white rounded-full py-1" />

          <FaLinkedin className="text-red text-2xl bg-white rounded-full py-1" />
        </div>

        <div className="text-white px-10 max-md:px-2">
            <p className="">&copy;2023 PalmPay. All rights reserved.</p>
        </div>
        <div className="text-white mt-5 px-10 text-[16px] text-justify pb-5 max-md:px-2">
          <p className="text-gray-500">Palmpay is a financial service provided by Palmpay Limited, licensed and regulated by the Central Bank of Nigeria (CBN) Deposits are insured by the Nigerian Deposit insurance Coperation company (NDIC) We empower individuals and businesses with payments solutions, high-yield investment oppourtunities and esay-to-use tools for Financial management We are a global company with a presence in Nigeria, Ghana, Tanzania, and the United Kingdom</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
