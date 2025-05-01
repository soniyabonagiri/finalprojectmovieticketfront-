import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

import {Route, Routes} from 'react-router-dom'

import Home from './pages/home/Home'
// import Events from './pages/Events/Events' 
import Showtime from './pages/showtime/Showtime'
import Movies from './pages/Movies/Movies'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer'
import Loginpopup from './components/loginpopup/Loginpopup'
import Signinpopup from './components/signinpopup/Signinpopup'
import Cart from './pages/cart/cart'
import Placeorder from './pages/orders/Placeorder'
import SeatSelection from './components/seatselection/SeatSelection'
import Paymentpage from './components/payment/Paymentpage'
import Theaters from './components/theaters/Theaters'
// import Booknow from './components/booknow/Booknow'
import Register from './components/Register'
import Myorders from './pages/myorders/Myorders'
// import MovieDetail from './components/moviedetails/MovieDetails'

// import { ThemeProvider } from './ThemeContext';
// import { ThemeProvider } from './Themecontex'

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
        <Route path='/contact' element={<Showtime/>}></Route>
        <Route path='/orders' element={<Placeorder/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        {/* <Route path='/moviedetails' element={<MovieDetail/>}></Route> */}
        <Route path='/seatselection' element={<SeatSelection/>}></Route>
        <Route path='/payment' element={<Paymentpage/>}></Route>
        <Route path='/theater' element={<Theaters/>}></Route>
        {/* <Route path='/booknow' element={<Booknow/>}></Route> */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>
      <Footer/>
      
    </div>
    </>
 
  )
}

export default App
