import React from 'react'
import './Exploremovies.css'
import { movie_list } from '../../assets/assets'

const Exploremovies = ({category,setCategory}) => {

    return (
        <div className='explore-movie' id='explore-movie'>
            <h1>Avaliable theaters in Hyderabad</h1>
            {category}

            <div className='explore-movie-list'>
                {movie_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-movie-list-1'>
                    <img className={category===item.movie_name?'active':''} onClick={()=>setCategory((prev)=>prev==item.movie_name?'all':item.movie_name)} src={item.movie_image} alt="movieimage" />
                    <p>{item.movie_name}</p>

            {/* 55:24 */}

                     </div>

                )
                })
                }
 
            </div>
        
                <hr />

        </div>
    )
}

export default Exploremovies
