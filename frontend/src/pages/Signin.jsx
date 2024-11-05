import React, { useState } from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../AuthContext'

export default function Signin() {

  
  const [email,setEmail]=useState()
  const [err,setError]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const {loginHandler} =useAuth()

  const handleClick = async (event) => {
    event.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post('http://localhost:5000/', data);

      const { username } = response.data;
      loginHandler(username);
      navigate('/home');
    } catch (error) {
      setError(error.response.data)
      console.error('Could not send data via post:', error);
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen'>
    <div className='h-[500px] w-[400px] flex flex-col items-center'>
     <div className='text-red-500 my-2'>{err}</div>
           <div className='flex items-center flex-col w-[100%] justify-around h-[100%] border-slate-400 border-2 p-5 bg-slate-200'>
              <img src={logo} alt="logo" className='h-[100px]'/>
              <form action="/signup" className='flex flex-col w-[90%]'>
                <input type="email" placeholder='Phone number, username or email' className='m-3 p-2 w-[100%]' name='email' onChange={(e)=>{setEmail(e.target.value)}} required/>
                <input type="password" placeholder='Password' className='m-3 p-2 w-[100%]' name='password' onChange={(e)=>{setPassword(e.target.value)}} required/>
                <input type="submit" className='text-white bg-blue-500 rounded m-3  w-[100%] h-[40px]' value='Log In' onClick={handleClick}/>
              </form>
              <p className='m-3'>Forgot password?</p>
           </div>

           <div className='h-[15%] bg-slate-200 border-slate-400  border-2 text-centre mt-3 w-full flex justify-center items-center'> 
            <p>Don't have an account? <Link to='/signup' className='text-blue-500 font-semibold'>SignUp</Link></p>
           </div>
       </div>
   </div>
  )
}
