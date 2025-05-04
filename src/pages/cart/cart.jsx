import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import './cart.css'
import { Link } from 'react-router-dom'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';



const cart = () => {
  const {token, cartitems, movie_name_list, removeFromCart, getTotalCartAmount,url } = useContext(Storecontext);
  const location = useLocation();
  const navigate=useNavigate();
  const selectedSeatsData = location.state;

  useEffect(() => {
    if (!token) {
      alert("Please login first.");
      navigate("/login");
    }
  }, [token]);
  
  useEffect(()=>{
    console.log(cartitems)
},[cartitems])


// const paymentFunction=async ()=>{
//   // e.preventDefault();
//     console.log('payment function called!');
//     let response=await axios.post('http://localhost:4000/api/order/place',{},{headers:{token}});
//     if(response && response.status===200){
//       window.location.href=response.data.url
//       console.log(response.data);
//     }
//     else{
//       console.log('Error')
//     }



// }


  return (
    <div className='cart'>
      <div className='cart-items'>
        <div>
          {movie_name_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div className='cart-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <div className="cart-items-title">
                    <p >{item.name}</p>
                    <p className='cart-item-desc'>{item.description}</p>
                    <div className="cart-item-price">

                      <p>Rs {item.price}</p>
                      <p> * </p>
                      <p>{cartitems[item._id]}</p>
                      <p>=</p>
                      <p>Rs {item.price * cartitems[item._id]}</p>
                    </div>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                    {/* <p>please select the theater here</p> */}
                    {/* <Link to='/theater'>
                    <button >Select Theater</button>
                    </Link> */}


                    <Link
                      to="/seatselection"
                      state={{
                        movieId: item._id,
                        movieName: item.name,
                        seatsToSelect: cartitems[item._id],
                        price: item.price,
                        image: item.image,
                        description: item.description
                      }}
                    >
                      <button>select the seats</button>
                    </Link>
                    {selectedSeatsData?.selectedSeats && (
                      <div>
                        <p>🎟 Selected Seats for {selectedSeatsData.movieName}: {selectedSeatsData.selectedSeats.join(', ')}</p>
                        <p>💰 Total Price: Rs {selectedSeatsData.seatsToSelect * item.price}</p>
                        <p>🪑 Total Seats: {selectedSeatsData.seatsToSelect}</p>
                      </div>
                    )}



                    {/* <Link to='/seatselection'>
                    <button >select the seats</button>
                    </Link> */}
                  </div>
                  <br />
                  <hr />
                </div>

              )
            }
          })}
          <hr />
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub total</p>
                <p>{getTotalCartAmount()}</p>


              </div>
              {/* <div className="cart-total-detials">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div> */}
              <div className="cart-total-details">
                <p><b>Total</b></p>
                <b>{getTotalCartAmount()}</b>


              </div>


            </div>
            <hr />
            <h2>Booking Summary</h2>

            {selectedSeatsData?.selectedSeats && (
              <div>


                <p>Selected Seats for {selectedSeatsData.movieName}: {selectedSeatsData.selectedSeats.join(', ')}</p>
                <p> Total Seats: {selectedSeatsData.seatsToSelect}</p>
                <p>Total Price: Rs {getTotalCartAmount()}</p>

                <h4 state={{
                  movieName: selectedSeatsData.movieName,
                  selectedSeats: selectedSeatsData.selectedSeats,
                  // seatsToSelect: selectedSeatsData.seatsToSelect,
                  price: selectedSeatsData.price,
                  image: selectedSeatsData.image,
                  description: selectedSeatsData.description,
                  bookingDate: new Date().toLocaleDateString(),
                  bookingTime: new Date().toLocaleTimeString()
                }}>
                  <Link to='/orders'>
                  <button>Book Now</button>
                  </Link>
                </h4>
              </div>
            )}

            {/* <Link to='/booknow'><button>Book Now</button></Link> */}

          </div>



          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, please Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='Promocode' />
                <button>Submit</button>
              </div>
            </div>
          </div>



        </div>






      </div>
    </div>

  )
}

export default cart
