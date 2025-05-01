import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// import { placeOrder } from '../../../../backend/controller/Ordercontroller'

const Placeorder =(e) => {
    const { getTotalCartAmount,token,movie_name_list,cartitems,url} = useContext(Storecontext)

    // const [data,setData]=useState({
    //     firstName:"",
    //     lastName:"",
    //     email:"",
    //     street:"",
    //     city:"",
    //     state:"",
    //     zipcode:"",
    //     country:"",
    //     phone:""
    //   })

    //   const onChangeHandler= async (event)=>{
    //     const name=event.target.name;
    //     const value=event.target.value;
    //     setData(data=>({...data,[name]:value}))
    
    
    //   }
    //   useEffect(()=>{
    //     console.log(data);
    //   },[data])
    
    const Placeorder=async(e)=>{
        // console.log("place order")
        e.preventDefault();
        let orderItems=[];
        movie_name_list.map((item)=>{
            if(cartitems[item._id]>0){
                let itemInfo=item;
                itemInfo['quantity']=cartitems[item._id];
                orderItems.push(itemInfo)
            }
        })
        // console.log(orderItems)
        let orderdata={
            items:orderItems,
            amount:getTotalCartAmount()
        }

        let response=await axios.post(url+'/api/order/place',orderdata,{Headers:{token}})
        if(response.data.success){
            const {session_url}=response.data;
             //now we have to send the user on this session url.
             window.location.replace(session_url);
        }
        else{
            alert("Error")
          }
      
    }

    const paymentFunction=async (e)=>{
        e.preventDefault();
        console.log('payment function called!');
        let response=await axios.post('http://localhost:4000/api/order/place');
        if(response && response.status===200){
          window.location.href=response.data.url
          console.log(response.data);
        }
        else{
          console.log('Error')
        }
      }
    
    

    return (
        <div>

<form  onSubmit={Placeorder} action="" className='place-order'>
      {/* <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='First Name' />
          <input type="text" name="lastName" onChange={onChangeHandler}  value={data.lastName} placeholder='Last Name' />
        </div>
        <input type="text" name="email" onChange={onChangeHandler} value={data.email}   placeholder='Email address' />
        <input type="text"    name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />


        <div className="multi-fields" >
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onChangeHandler}  value={data.zipcode} type="text" placeholder='Zip Code' />


          <input type="text" onChange={onChangeHandler}  value={data.country} placeholder='Country' />
        </div>
        <input type="text" onChange={onChangeHandler}  value={data.phone}placeholder='Phone' />

                </div> */}
                <div className="place-order-right">
      <div className="cart-total">
                    <h2>booking Totals</h2>
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
                    <button type='submit' >Proceed to payment</button>
                </div>


        </div>


    </form >

      
    </div >
  )
}

export default Placeorder
