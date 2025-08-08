
import React, { createContext, useCallback, useEffect, useState } from 'react'
// import { movie_name_list } from '../assets/assets';
import axios from 'axios'
import { Alert } from 'bootstrap';
export const Storecontext = createContext(null);

const StoreContextProvider = (props) => {

    let url='https://backendproject-1-2.onrender.com'
    const [token,setToken]=useState("")


    const [movie_name_list,setmovielist]=useState([]);

    const [cartitems, setcartitems] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [theater, setTheater] = useState(null);
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




    // const [selectedSeats, setSelectedSeats] = useState([]);

    const addtocart =async (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems(prev => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(!token){
            console.log('login');

            
        }
        else{
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})

        }
        

    }



    const removeFromCart =async (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }

    }



    const getTotalCartAmount = () => {
        let totalAmount = 0;
         
            
            for (const itemId in cartitems) {
                if (cartitems[itemId] > 0) {
                    let itemInfo = movie_name_list.find((product) => product._id === itemId);
                    if(itemInfo){
                        
                        totalAmount = totalAmount + itemInfo.price * cartitems[itemId];
                    }
                    else{
                        console.log('product not found ')

                    }
                }
            
        }
        return totalAmount;



    }



    const toggleSeatSelection = (seatId) => {
        setSelectedSeats((prevSelectedSeats) =>
          prevSelectedSeats.includes(seatId)
            ? prevSelectedSeats.filter((id) => id !== seatId)
            : [...prevSelectedSeats, seatId]
        );
    }

    const reserveSeats = (seats) => {
        console.log('Seats reserved:', seats);
        // Here, you would typically make an API call to save the reservation to the server
      };


    useEffect(() => {
        console.log(cartitems);

    }, [cartitems])


    const loadCartData=async (token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setcartitems(response.data.cartData);
    
    
    }
    

    useEffect(()=>{
        

        async function loadData() {
            await fetchmovieList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))

        
            }
        } 
        loadData();   
    
    },[])
    
    const fetchmovieList=async ()=>{
        const response=await axios.get(url+"/api/list");
        setmovielist(response.data.data)
        console.log(response.data)
    
    
    }
    






    const contexValue = {
        movie_name_list,
        cartitems, setcartitems,
        addtocart, removeFromCart,
        getTotalCartAmount,
        selectedSeats,
        toggleSeatSelection,
        reserveSeats,
        theater,
        movies,
        showtimes,
        loading,
        error,
        // fetchTheaterDetails,
        url, token,
        setToken,
        fetchmovieList




    }
    return (
        <Storecontext.Provider value={contexValue}>
            {props.children}
        </Storecontext.Provider>
    )

}
export default StoreContextProvider





