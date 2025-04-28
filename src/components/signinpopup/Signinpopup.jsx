import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Signinpopup.css'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Signinpopup = ({showsignin,setshowsignin}) => {

    // if(!setshowsignin) return null;
    const {url,token,setToken}=useContext(Storecontext);



    const [currState, setCurrstate] = useState('Sign Up')

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;


        setData(data=>({...data,[name]:value}))


    }

    // useEffect(()=>{
    //     console.log(data);

    // },[data])

    const onLogin=async (e)=>{
        // console.log('login fun')
       e.preventDefault();
       let newurl=url;
       if(currState==="Login"){
           newurl+="/api/login"
       }
       else{
           newurl+="/api/register"
       }

       const resp=await axios.post(newurl,data)
    //    console.log(resp);
    if(resp.data.success){
        //means we got login successfull so we will get one token
        //we use a state variable to store token and lets create that varible inside storeContext.jsx
        setToken(resp.data.token);
        localStorage.setItem("token",resp.data.token);
        setshowsignin(false)
        // console.log(resp.data.token)

    }
    else{
        alert(resp.data.message)
    }

   }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} action="" className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    {/* <p onClick={()=>setshowsignin(false)}>x</p> */}
                    <img src={assets.cross} alt="" onClick={()=>setshowsignin(false)} />

                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' name='name' onChange={onChangeHandler} value={data.name}  required  />
                    }
                    <input type="email" name="email" id="email" placeholder='Your Email' required onChange={onChangeHandler} value={data.email}  />
                    <input type="password" name="password" id="password" placeholder='password' required onChange={onChangeHandler} value={data.password}  />

                    <button type='submit'>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>By continuing, i agree to the terms of use & privacy policy</p>
                    </div>
                    {currState === 'Login' ? <p>Create a new account?
                        <span onClick={() => setCurrstate('Sign Up')}>click here</span></p> :
                        <p>Already have an account?
                            <span onClick={() => setCurrstate('Login')}>Login here</span></p>
                    }
                </div>

            </form>
        </div>

    )
}

export default Signinpopup
