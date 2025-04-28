import React, { useReducer, useState,useContext } from 'react'
import { assets } from '../../assets/assets'
import './Movielist.css'
// import Moviedesc from '../moviedesc/Moviedesc'
import { Storecontext } from '../../context/Storecontext'


const Movielist = ({id,name,image,price,description}) => {
    // const [itemcount,setitemcount]=useState(0);
    // useReducer()
    const {cartitems,addtocart,removeFromCart,url}=useContext(Storecontext)
    
  return (
    <div className='movie_list'>
        <div className="movie_list_image_container">
            <img className="movie_list-image" src={url+"/images/"+image} alt="movieimage" />
            {
                !cartitems[id] ? <button className='add' onClick={()=>addtocart(id)}>Book Now</button>:
                <div className='movie_item_count'>
                    <img onClick={()=>removeFromCart(id)} src={assets.removeicon} alt="-img" />
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addtocart(id)} src={assets.addicon} alt="" />
                </div>

            }
        </div>
        <div className="movie_list_info">
            <div className="movie_list_name_rating">
                <h4>{name}</h4>
                <img src={assets.rating_stars1} alt="ratings" />
            </div>
            <p className="movie_list_desc">{description}</p>
            {/* <p className="moive_list_price">{price}</p> */}
        </div>
        
      
    </div>
  )
}

export default Movielist
