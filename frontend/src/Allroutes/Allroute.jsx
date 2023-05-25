import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../Css/Home'
import Signup from '../Components/Signup'
import Signin from '../Components/Signin'
import SellcarPage from '../Pages/SellcarPage'

const Allroute = () => {
  return (
 
   
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/sellyourcar' element={<SellcarPage />}></Route>
        </Routes>
  
  
  )
}

export default Allroute