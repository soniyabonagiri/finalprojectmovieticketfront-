import React from 'react'
import './Slidebar.css';
import Carousel from 'react-bootstrap/Carousel';



const Slidebar = () => {


    return (
      <>

    <Carousel id='carousel' >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBRC3gZPB9rGlXdUTo0rhhL_OhR3FUtrR6g&s"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img id='img2'
          className="d-block w-100"
          src="https://thecolourmoon.com/assets/images/movie-ticket-booking.png"
          alt="Second slide"
        />
      
      </Carousel.Item>
      
    </Carousel>
      </>
        );
      
}

export default Slidebar
