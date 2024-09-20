import React from 'react'
import Header from "../../components/Header";
import Finance from './Finance';
import Service from "./Service"
import Bills from "./Bills";
import Privacy from './Privacy';
import HelpCenter from './HelpCenter';
import Users from './Users';
import Footer from './Footer';
import Popup from './Popup';

function Home() {
  return (
    <>
    <Header/>
    <Finance/>
    <Service/>
    <Bills/>
    <Privacy/>
    <HelpCenter/>
    <Users/>
    <Footer/>
    <Popup/>

    

    </>
    
  )
}

export default Home