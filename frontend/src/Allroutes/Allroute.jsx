import React from 'react'
import {Route, Routes} from "react-router-dom"

import Signup from '../Components/Signup'
import Signin from '../Components/Signin'
import SellcarPage from '../Pages/SellcarPage'
import Home from '../Pages/Home'
import Yourpost from '../Pages/Yourpost'

const Allroute = () => {
  return (
 
   
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/sellyourcar' element={<SellcarPage />}></Route>
            <Route path='/yourpost' element={<Yourpost />}></Route>
        </Routes>
  
  
  )
}

export default Allroute