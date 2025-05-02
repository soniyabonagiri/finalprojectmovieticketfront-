import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

import {Route, Routes} from 'react-router-dom'

import Home from './pages/home/Home' 
// import Showtime from './pages/showtime/Showtime'
import Movies from './pages/Movies/Movies'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer'
import Signinpopup from './components/signinpopup/Signinpopup'
import Cart from './pages/cart/cart'
import Placeorder from './pages/orders/Placeorder'
import SeatSelection from './components/seatselection/SeatSelection'
import Paymentpage from './components/payment/Paymentpage'
import Myorders from './pages/myorders/Myorders'
import Confirm from './pages/confirm'

const App = () => {

  const [showsignin,setshowsignin]=useState(false);
  return (
    <>
    {showsignin ? <Signinpopup setshowsignin={setshowsignin}/> :<></> }
    <div className='appclass'>
      <Navbar setshowsignin={setshowsignin} showsignin={showsignin}/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        {/* <Route path='/contact' element={<Showtime/>}></Route> */}
        <Route path='/orders' element={<Placeorder/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/seatselection' element={<SeatSelection/>}></Route>
        <Route path='/payment' element={<Paymentpage/>}></Route>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route path='/confirmation' element={<Confirm/>}/>
      </Routes>
      <Footer/>
      
    </div>
    </>
 
  )
}

export default App
