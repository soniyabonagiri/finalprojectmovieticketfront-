import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
        <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> MovieTicket App</p>
        <div className="app-download-platforms">
            <img src={assets.appd1} alt="" />
            <img src={assets.appd2} alt="" />
        </div>


      
    </div>

  )
}

export default AppDownload
