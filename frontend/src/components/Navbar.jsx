import React from 'react'
import logo from '../img/clogo.webp'
import {Link} from 'react-router-dom'
import {useAuth} from '../AuthContext'

export default function Navbar() {
  const {username} =useAuth();
  return (
    <div className='mulish flex  h-screen flex-col items-center shadow-slate-500 shadow-2xl'>
     <img src={logo} alt="logo" className='w-[150px] my-10' />
     <ul className='flex flex-col h-[60%] justify-around text-xl'>
        <Link to ='/app/home'> 
        <span class="material-symbols-outlined">home</span>
          Home</Link>
        <Link to='/app/announcements' className='mulish'>
        <span class="material-symbols-outlined">brand_awareness</span>
          Announcements</Link>
        <Link to='/app/addproject'>
        <span class="material-symbols-outlined">add_box</span>
          Add Project</Link>
        <Link to='/app/addresource'>
        <span class="material-symbols-outlined">add_box</span>
          Add Resource</Link>
        
        <Link to={`/app/profile/${username}`}>
        <span class="material-symbols-outlined">person</span>
          Profile</Link>
     </ul>
     
    </div>
  )
}
