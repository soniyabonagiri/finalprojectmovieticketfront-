import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SeatSelecttion.css'

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId, movieName, seatsToSelect, price,
    image,
    description } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);


  

  useEffect(() => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatsPerRow = 8;
    const allSeats = [];

    rows.forEach(row => {
      for (let i = 1; i <= seatsPerRow; i++) {
        allSeats.push(`${row}${i}`);
      }
    });

    setSeats(allSeats);
  }, []);

  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(prev => prev.filter(s => s !== seat));
    } else if (selectedSeats.length < seatsToSelect) {
      setSelectedSeats(prev => [...prev, seat]);
    } else {
      alert(`You can only select ${seatsToSelect} seat(s)`);
    }
  };

  const handleConfirmSeats = () => {
    navigate('/cart', {
      state: {
        movieId,
        movieName,
        selectedSeats,
        seatsToSelect
      }
    });
  };

  return (
    <div className="seat-selection">
      <h2>{movieName} - Select {seatsToSelect} Seat(s)</h2>
      <div className="seats-grid">
        {seats.map(seat => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeatSelection(seat)}
          >
            {seat}
          </div>
        ))}
      </div>

      <button 
        onClick={handleConfirmSeats}
        disabled={selectedSeats.length !== seatsToSelect}
      >
        Confirm & Go Back to Cart
      </button>
    </div>
  );
};

export default SeatSelection;

