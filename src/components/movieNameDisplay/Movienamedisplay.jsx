import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import Movielist from '../movielist/Movielist'
// import { movie_name_list } from '../../assets/assets'
import './Movienamedisplay.css'

const Movienamedisplay = ({category}) => {

    const {movie_list,movie_name_list}=useContext(Storecontext)
  return (
    <div>
        <div className='movie-display' id='movie-display'>
            <h2>Top Movies Here</h2>
            <div className='movie-display-list'>
                {movie_name_list.map((item,index)=>{
                    // category
                    if(category=="all"||category===item.category){

                        return <Movielist key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
                    }
                })}

            </div>
 
        </div>
    </div>
  )
}

export default Movienamedisplay
