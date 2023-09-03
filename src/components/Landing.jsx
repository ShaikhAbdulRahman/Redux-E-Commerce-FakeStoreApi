import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Product from './Product'
import Cart from './Cart'
import Details from './Details'

const Landing = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/details' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Landing