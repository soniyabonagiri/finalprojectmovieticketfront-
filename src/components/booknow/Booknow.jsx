import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookNow.css';

const BookNow = () => {
  const location = useLocation();
  const { movieName, selectedSeats, seatsToSelect, price, image, description } = location.state || {};

  return (
    <div className="book-now">
      <h2>🎬 Booking Summary</h2>
      <img src={image} alt={movieName} className="movie-poster" />
      <h3>{movieName}</h3>
      <p>{description}</p>
      <p><strong>Seats:</strong> {selectedSeats?.join(', ')}</p>
      <p><strong>Total Tickets:</strong> {seatsToSelect}</p>
      <p><strong>Total Price:</strong> Rs {price * seatsToSelect}</p>
      
      <button onClick={() => alert("Booking Confirmed!")}>Confirm Booking</button>
    </div>
  );
};

export default BookNow;




















// import React, { useContext } from 'react'

// import { theaters, movies, showtimes } from '../../assets/assets';
// import { Storecontext } from '../../context/Storecontext';
// import { Link } from 'react-router-dom';

// const Booknow = ({  theater, showtime, numberOfTickets, totalPrice }) => {

//     const { selectedSeats, toggleSeatSelection, reserveSeats } = useContext(Storecontext)
//     return (
//         <div className="book-now-page">
//             <h2>Booking Summary</h2>


//             <div className="booking-info">
//                 <p><strong>MovieName:</strong> {movies.name}</p>
//                 <p><strong>Theater:</strong> {theaters.name}</p>
//                 <p><strong>Showtime:</strong> {showtimes.time}</p>
//                 <p><strong>Number of Tickets:</strong> {numberOfTickets}</p>
//                 <p><strong>Total Price:</strong> ${totalPrice}</p>
//             </div>

//             <div className="selected-seats">
//                 <h3>Selected Seats</h3>
//                 <ul>
//                     {selectedSeats.map((seat, index) => (
//                         <li key={index}>{`Seat ${seat.row}-${seat.column}`}</li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="payment-section">
//                 <Link to='/payment'>
//                 <button className="btn-confirm">Confirm Booking</button>
//                 </Link>
//             </div>
//         </div>


//     )
// }

// export default Booknow
