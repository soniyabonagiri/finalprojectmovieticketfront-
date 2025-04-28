import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo' src={assets.logo1} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad molestiae, cum distinctio placeat neque similique ratione nulla culpa quae harum quas dignissimos eos minus aliquid natus voluptate exercitationem nam odit?</p>
          <div className="footer-social-icons">
            <img src={assets.f3} alt="facebookicon" />
            <img src={assets.f2} alt="insta Icon" />
            <img src={assets.f4} alt="Twitter Icon" />
          </div>


        </div>
        <div className="footer-content-center">
          <h2>COMPANY </h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Bookings</li>
            <li>Privacy Policy</li>
          </ul>


        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-987-456-7890</li>
            <li>contact@movieticket.com</li>
          </ul>


        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Movieticket.com || All Rights Reserved
      </p>



    </div>


  )
}

export default Footer
