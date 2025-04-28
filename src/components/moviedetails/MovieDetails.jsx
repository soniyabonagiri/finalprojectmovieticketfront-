// src/pages/MovieDetail.jsx
import React, { useContext } from 'react';
import SeatSelection from '../../components/seatselection/SeatSelection'
import { Storecontext } from '../../context/Storecontext';

 const {cartitems}=useContext(Storecontext);

const MovieDetail = () => {
  // Function to handle confirmed seat selection
  const handleConfirmSelection = (selectedSeats) => {
    console.log('Selected Seats:', selectedSeats);
    // Here you can make an API call to save the selection or handle it as needed
  };

  return (
    <div>
      <h1>Movie Title</h1>
      <p>Movie Description...</p>
      {/* Use the SeatSelection component */}
      <SeatSelection  maxSelectable={cartitems[item._id]}
      
      // onConfirm={handleConfirmSelection} 
      />
      <p>{maxSelectable}</p>
    </div>
  );
};

export default MovieDetail;
