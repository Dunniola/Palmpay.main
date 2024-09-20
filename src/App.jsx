import React from 'react'
import Home from "../src/components/Home/Home";


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route> 
        <Route path = "/" element = {<Home/>}></Route>
        

      </Route>
    )
  )
  
  return (

    <>
    <div className="overflow-x-hidden">
    <RouterProvider router={router} />
    </div>
    </>
  )
  
}

export default App