import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Confirm.css'

const Confirm = () => {

    const navigate = useNavigate();
  
    const handleGoHome = () => {
      navigate('/');
    };
  return (


    <div className="confirmation-container">
      <div className="confirmation-card">
        <h1 className="confirmation-title">Booking Confirmed!</h1>
        <p className="confirmation-message">
          Thank you for your booking.</p>
        <button className="confirmation-button" onClick={handleGoHome}>
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default Confirm
