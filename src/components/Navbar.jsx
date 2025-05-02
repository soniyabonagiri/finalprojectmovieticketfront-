import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'
import { Link, Links } from 'react-router-dom';
import { useContext } from 'react';
import { Storecontext } from '../context/Storecontext';
import {useNavigate} from 'react-router-dom'

const Navbar = ({ showsignin, setshowsignin }) => {
    const navigate=useNavigate();


    const [Movievar, setMovie] = useState('Home');
    const { getTotalCartAmount, token, setToken } = useContext(Storecontext)

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        //when the user logout, we have to send him to home page- use navigate hook.
        navigate('/')
        
      }
    

    return (
        <div className='navbar'>
            <img id='logo' src={assets.logo1} alt="" srcset="" />
            <ul className='navbarlist'>
                <Link to='/' onClick={() => setMovie('Home')} className={Movievar === 'Home' ? 'active' : ""}>Home</Link>
                <a href='#explore-movie' onClick={() => setMovie('Movies')} className={Movievar === 'Movies' ? 'active' : ""}>Movies</a>

                <a href='#footer' onClick={() => setMovie('Contact')} className={Movievar === 'Contact' ? 'active' : ""}>Contact</a>


                <a href='#app-download' onClick={() => setMovie('MobileApp')} className={Movievar === 'MobileApp' ? 'active' : ""}>MobileApp</a>

            </ul>
            <div className='navbarright'>
                <img className='serachbtn' src={assets.search} alt="serach logo" />
                <Link to='/cart'>
                    <img src={assets.cart1} alt="cart logo" className="cartbtn" />
                </Link>
                {!token ?

                    <button onClick={() => setshowsignin(true)} className='signbtn'>Signin</button> :
                    <div className='navbar-profile'>
                        <img className='profileclass' src={assets.profile} alt="" />
                        <ul className="nav-profile-dropdown">
                            {/* <li onClick={()=>navigate('/myorders')} ><img src={assets.booked} alt="" /><p >Booked</p></li> */}
                            {/* <hr /> */}
                            <li onClick={logout}><img src={assets.logout} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>}

                    



            </div>

        </div>
    )
}

export default Navbar
