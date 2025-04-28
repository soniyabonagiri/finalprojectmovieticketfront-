import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Theaters.css'
import axios from 'axios'
import { Storecontext } from '../../context/Storecontext';
import {theaters, movies ,showtimes} from '../../assets/assets';

const Theaters = () => {
   
  return (

    <div  className='movie'>
    <h2>{theaters.name}</h2>
    <p>{theaters.address}</p>

    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie._id}>
          <img src={movie.posterUrl} alt={movie.title} width="200" height='250' />
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>

          <div className='showtime'>
            {showtimes
              .filter((show) => show.movieId === movie._id)
              .map((show) => (
                <Link to='/seatselection'>
                <button key={show._id}>{show.time}</button>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>

    // <div className="theater">
    // <h1>{theater.name}</h1>
    // <p>{theater.address}</p>
    // <p>{theater.city}, {theater.state} - {theater.zip}</p>
    
    // <h2>Movies Currently Showing</h2>
    // <div className="movie-list">
    //   {Array.isArray(movies)&&movies.length > 0 ? (
    //     movies.map((movie) => {
    //       // Find showtimes for the current movie
    //       const movieShowtimes = showtimes.filter(showtime => showtime.movieId === movie._id);
          
    //       return (
    //         <div key={movie._id} className="movie-card">
    //           <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
    //           <h3>{movie.title}</h3>
    //           <p>{movie.genre}</p>
              
    //           <div className="showtimes">
    //             {movieShowtimes.length > 0 ? (
    //               movieShowtimes.map((showtime) => (
    //                 <div key={showtime._id} className="showtime">
    //                   <p>Showtime: {showtime.time}</p>
    //                   <Link to={`/seat-selection/${movie._id}/${theaterId}/${showtime._id}`} className="book-ticket-link">Book Ticket</Link>
    //                 </div>
    //               ))
    //             ) : (
    //               <p>No showtimes available</p>
    //             )}
    //           </div>
    //         </div>
//           );
//         })
//       ) : (
//         <p>No movies available at this theater.</p>
//       )}
//     </div>
//   </div>
      )
}

export default Theaters







// import React, { useContext } from 'react'
// import './Theaters.css'
// import { useNavigate } from 'react-router-dom';
// import { Storecontext } from '../../context/Storecontext';

// const Theaters = () => {
//     const navigate=useNavigate();
//     const {setseats}=useContext(Storecontext);
//     const handleBookNow = (movieId, theaterId, showtime) => {
//         setseats(1); // default, you can change this based on selection
//         navigate(`/select-seats?movieId=${movieId}&theaterId=${theaterId}&time=${showtime}`);
//       };


//   return (

//     <div className="theater-container">
//       <h2>Now Showing</h2>
//       {Theaters.map((theater) => (
//         <div key={theater._id} className="theater-card">
//           <h3>{theater.name} - {theater.location}</h3>
//           <div className="movie-list">
//             {theater.movies.map((movie) => (
//               <div key={movie._id} className="movie-card">
//                 <img src={movie.posterUrl} alt={movie.title} />
//                 <h4>{movie.title}</h4>
//                 <div className="showtimes">
//                   {movie.showtimes.map((time, i) => (
//                     <button
//                       key={i}
//                       onClick={() => handleBookNow(movie._id, theater._id, time)}
//                     >
//                       {time}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Theaters
