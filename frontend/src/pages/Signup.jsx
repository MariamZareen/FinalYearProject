import React, { useState } from 'react'
import logo from '../img/clogo.webp'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../AuthContext'


export default function Signup() {
  const {loginHandler} =useAuth()
  const [err,setError] =useState()
  const [fullname,setName]=useState()
  const [passout,setPassout]=useState()
  const [username,setUsername]=useState()
  const [dept,setDept]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate()

  const handleClick=(e)=>{
    e.preventDefault()
    const data={dept,passout,fullname,username,password}
    axios.post('http://localhost:5000/signup',data)
    .then(()=>{
          loginHandler(username)
          navigate('/app/home')
    })
    .catch((error)=>{
      setError(error.response.data)
      console.log(error.response.data)
    })
  }

  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div className='h-[650px] w-[400px] flex flex-col items-center'>
            <div className='text-red-500 my-2'>{err}</div>
               <div className='flex items-center flex-col w-[100%] justify-around h-[90%] border-slate-400 border-2 p-5 bg-slate-200'>
                  <img src={logo} alt="logo" className='h-[100px]'/>
                  <p className='text-slate-500 text-center font-semibold text-lg'>Sign up to see projects and resources from your friends and peers.</p>
                  <form action="/signup" className='flex flex-col w-[90%]'>
                  <input type="text" placeholder='Department or Branch' name='branch' className='m-3 p-2 w-[100%]'  onChange={(e)=>{setDept(e.target.value)}} required />
                  <input type="text" placeholder='Passout Year' name='passout' className='m-3 p-2 w-[100%]'  onChange={(e)=>{setPassout(e.target.value)}} required />
                  <input type="text" placeholder='Full name' name='name' className='m-3 p-2 w-[100%]'  onChange={(e)=>{setName(e.target.value)}} required/>
                  <input type="text" placeholder='USN' name='username' className='m-3 p-2 w-[100%]'  onChange={(e)=>{setUsername(e.target.value)}} required/>
                  <input type="password" placeholder='Password' className='m-3 p-2 w-[100%]' name='password' onChange={(e)=>{setPassword(e.target.value)}} required/>
                  <input type="submit" className='text-white bg-blue-500 rounded m-3  w-[100%] h-[40px]' value='Sign up' onClick={handleClick}/>
                  </form>
                  
               </div>

               <div className='h-[15%] bg-slate-200 border-slate-400  border-2 text-centre mt-3 w-full flex justify-center items-center'> 
                <p>Already have an account? <Link to='/' className='text-blue-500 font-semibold'>SignIn</Link></p>
               </div>
        </div>
    </div>
  )
}
