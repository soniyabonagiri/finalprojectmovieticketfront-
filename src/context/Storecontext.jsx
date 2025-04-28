import React, { createContext, useCallback, useEffect, useState } from 'react'
// import { movie_name_list } from '../assets/assets';
import axios from 'axios'
export const Storecontext = createContext(null);

const StoreContextProvider = (props) => {

    let url='http://localhost:4000'
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

    const addtocart = (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems(prev => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }



    const getTotalCartAmount = () => {
        let totalAmount = 0;


        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = movie_name_list.find((product) => product._id === item)
                totalAmount = totalAmount + itemInfo.price * cartitems[item]
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

    




      const fetchTheaterDetails = useCallback(async (theaterId) => {
        setLoading(true);
        try {
          // Example API endpoints - adjust as per your backend
          const [theaterRes, moviesRes, showtimesRes] = await Promise.all([
            axios.get(`/api/theaters/${theaterId}`),
            axios.get(`/api/theaters/${theaterId}/movies`),
            axios.get(`/api/theaters/${theaterId}/showtimes`)
          ]);
    
          setTheater(theaterRes.data);
          setMovies(moviesRes.data);
          setShowtimes(showtimesRes.data);
          setError(null);
        } catch (err) {
          console.error(err);
          setError('Failed to fetch theater details');
        } finally {
          setLoading(false);
        }},[]);


    useEffect(() => {
        console.log(cartitems);

    }, [cartitems])




    useEffect(()=>{
        

        async function loadData() {
            await fetchmovieList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
        
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
        fetchTheaterDetails,
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