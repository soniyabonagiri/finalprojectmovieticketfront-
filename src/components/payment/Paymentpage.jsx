import React, { useContext, useState } from 'react';
// import { useContext } from '../context/SeatContext';
import { useNavigate } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';
import { useLocation } from 'react-router-dom';
import './Paymentpage.css'

const Paymentpage = () => {
  const { seats, setSeats, setSelectedSeats, selectedSeats } = useContext(Storecontext)
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { getTotalCartAmount } = useContext(Storecontext)
  // const seatPrice = 200;

  // const totalAmount = selectedSeats.length * seatPrice;
  const location = useLocation();
  const { movieName, selectedSeat, seatsToSelect, totalAmount } = location.state || {};

  const navigate=useNavigate();



  const handlePayment = (e) => {
    e.preventDefault();

    if (!cardName || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all payment fields');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      alert(`🎉 Payment successful! ${getTotalCartAmount()}`);
      navigate('/confirmation'); // Navigate to confirmation page
    }, 1500);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p><strong>Total:</strong> ₹{getTotalCartAmount()}</p>

      <form onSubmit={handlePayment} className="payment-form">
        <input
          type="text"
          placeholder="Name on Card"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={16}
        />
        <input
          type="text"
          placeholder="Expiry (MM/YY)"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          maxLength={5}
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength={3}
        />
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Pay ₹' + getTotalCartAmount()}
        </button>
      </form>
    </div>


  )
}

export default Paymentpage
