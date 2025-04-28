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
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img id='img2'
          className="d-block w-100"
          src="https://thecolourmoon.com/assets/images/movie-ticket-booking.png"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-photo/cinema-mobile-app-tickets-online-260nw-2470120033.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
      </>
        );
      
}

export default Slidebar
