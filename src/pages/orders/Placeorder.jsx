import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import { placeOrder } from '../../../../backend/controller/Ordercontroller'

const Placeorder = (e) => {
    const { getTotalCartAmount, token, movie_name_list, cartitems, url } = useContext(Storecontext)


    return (
        <div>

            <form  action="" className='place-order'>
                
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>booking Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Sub total</p>
                                <p>{getTotalCartAmount()}</p>


                            </div>
                            
                            <div className="cart-total-details">
                                <p><b>Total</b></p>
                                <b>{getTotalCartAmount()}</b>


                            </div>


                        </div>
                        <Link to='/payment'>
                        <button  >Proceed to payment</button>
                        </Link>
                    </div>


                </div>


            </form >


        </div >
    )
}

export default Placeorder
