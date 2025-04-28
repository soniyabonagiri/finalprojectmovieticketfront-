import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'

const Orders = () => {
    const { getTotalCartAmount } = useContext(Storecontext)




    return (
        <div>

            <form action="" className='place-order'>
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <input type="text" placeholder='Email address' />
                    <input type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip Code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="text" placeholder='Phone' />






                </div>
                <div className="place-order-right">
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
                    <button >Proceed to payment</button>
                </div>


        </div>


    </form >

      
    </div >
  )
}

export default Orders
