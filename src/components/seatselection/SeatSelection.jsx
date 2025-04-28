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




















// import React, { useContext } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { Storecontext } from '../../context/Storecontext'
// import './SeatSelecttion.css'

// const SeatSelection = () => {
//   const{movieId,theaterId,time} =useParams()
//   const{selectedSeats, toggleSeatSelection, reserveSeats}=useContext(Storecontext)
//   // const history=useHistory();
//   const rows = 5; // Example number of rows in the theater
//   const seatsPerRow = 6; // Example number of seats per row

//   const handleReserve = () => {
//     // You can make an API call here to save the selected seats, but for now, we just log
//     reserveSeats(selectedSeats);
//     history.push(`/confirmation/${movieId}/${theaterId}`);
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < rows; row++) {
//       for (let seat = 0; seat < seatsPerRow; seat++) {
//         const seatId = `${row}-${seat}`;
//         const isSelected = selectedSeats.includes(seatId);
//         seats.push(
//           <button
//             key={seatId}
//             className={`seat ${isSelected ? 'selected' : ''}`}
//             onClick={() => toggleSeatSelection(seatId)}
//           >
//             {seatId}
//           </button>
//         );
//       }
//     }return seats;
//   }


  
//   return (
//     <div className="seat-selection">
//       <h1>Select Your Seats</h1>
//       <div className="seats-grid">
//         {renderSeats()}
//       </div>

//       <Link to='/booked' >
//       <button className="reserve-btn" onClick={handleReserve}>Reserve Seats</button>
//       </Link>
//     </div>
    
//   )
// }

// export default SeatSelection






// // import React, { useState, useEffect, useContext } from 'react';
// // import { generateSeats } from '../../assets/assets';
// // // import { generateSeats } from '../../components/moviedetails/MovieDetails';
// // import './SeatSelecttion.css'
// // import { Link  } from 'react-router-dom';
// // import { Storecontext } from '../../context/Storecontext';

// // const SeatSelection = (maxSelectable) => {
// // //   const [seats, setSeats] = useState([]);
// // //   const [selectedSeats, setSelectedSeats] = useState([]);
// // const {seats,setSeats,setSelectedSeats,selectedSeats}=useContext(Storecontext)
// //   const {cartitems}=useContext(Storecontext);
  

// //   useEffect(() => {
// //     setSeats(generateSeats());
// //   }, []);
  



// //   const toggleSeat = (seatId) => {
// //     setSelectedSeats((prevSelected) =>
// //       prevSelected.includes(seatId)
// //         ? prevSelected.filter((id) => id !== seatId)
// //         : [...prevSelected, seatId]
// //     );
// //   };

// //   return (
// //     <div className="seat-selector">
// //       <h2>Select Your Seats</h2>
// //       {/* {maxSelectable} */}
// //       <div className="seat-grid">
// //         {seats.map((seat) => (
// //           <div
// //             key={seat.id}
// //             className={`seat ${seat.isBooked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
// //             onClick={() => !seat.isBooked && toggleSeat(seat.id)}
// //           >
// //             {seat.id}
// //           </div>
// //         ))}
// //       </div>

// //       <div className="summary">
// //         <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
// //         <Link to='/payment'>
// //         <button disabled={selectedSeats.length ===0}>Proceed to Payment</button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SeatSelection;


















// // // import React, { useState } from 'react'
// // // import { bookedSeats, totalSeats } from '../../assets/assets'
// // // import './SeatSelecttion.css'

// // // const SeatSelection = ({ onConfirm }) => {
// // //     const [selectedSeats, setSelectedSeats] = useState([])

// // //     const handleSeatClick = (seatId) => {
// // //         if (selectedSeats.includes(seatId)) {
// // //             setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
// // //         }
// // //         else {
// // //             setSelectedSeats([...selectedSeats, seatId])
// // //         }
// // //     }


// // //     const renderSeats = () => {
// // //         let seatGrid = [];
// // //         for (let row = 1; row <= totalSeats.rows; row) {
// // //             let rowSeats = [];
// // //             for (let col = 1; col <= totalSeats.cols; col++) {
// // //                 const seatId = `${row}-${col}`;
// // //                 const isBooked = bookedSeats.includes(seatId);
// // //                 const isSelected = selectedSeats.includes(seatId);

// // //                 rowSeats.push(
// // //                     <div key={seatId}
// // //                         // className={`seat${isBooked? 'booked':''} ${isSelected}`}

// // //                         className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
// // //                         onClick={() => !isBooked && handleSeatClick(seatId)} // Allow selection if not booked
// // //                     >
// // //                         {seatId}

// // //                     </div>
// // //                 )

// // //             };
// // //             seatGrid.push(
// // //                 <div key={row} className="seat-row">
// // //                   {rowSeats}
// // //                 </div>
// // //               );

// // //         }
// // //         return seatGrid;


// // //     }



// // //     return (
// // //         <div className="seat-selection">
// // //       <h2>Select Your Seats</h2>
// // //       <div className="seats-container">
// // //         {renderSeats()} {/* Render the seat grid */}
// // //       </div>
// // //       <div className="selection-info">
// // //         <p>{selectedSeats.length} seat(s) selected</p>
// // //         <button
// // //           className="confirm-button"
// // //           onClick={() => onConfirm(selectedSeats)} // Call the onConfirm function with selected seats
// // //           disabled={selectedSeats.length === 0} // Disable if no seat is selected
// // //         >
// // //           Confirm Selection
// // //         </button>
// // //       </div>
// // //     </div>
// // //             )
// // // }

// // // export default SeatSelection
