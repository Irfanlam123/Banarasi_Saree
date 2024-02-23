import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from './container/shop/shop'
import About from './container/about/about'
import Contact from './container/contact/contact'
import Home from './container/home/home'



const Router = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

  )
}

export default Router