import React from 'react'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import {useAuth} from '../AuthContext'

export default function Navbar() {
  const {username} =useAuth();
  return (
    <div className='flex  h-screen flex-col items-center shadow-slate-500 shadow-2xl'>
     <img src={logo} alt="logo" className='h-20 my-10' />
     <ul className='flex flex-col h-[60%] justify-around text-xl'>
        <Link to ='/home'> 
        <span class="material-symbols-outlined">home</span>
          Home</Link>
        <li>
        <span class="material-symbols-outlined">search</span>
          Search</li>
        <li>
        <span class="material-symbols-outlined">explore</span>
          Explore</li>
        <li>
        <span class="material-symbols-outlined">movie</span>
          Reels</li>
        <li>
        <span class="material-symbols-outlined">chat_bubble</span>
          Messages</li>
        <li>
        <span class="material-symbols-outlined">favorite</span>
          Notifications</li>
        <li><span class="material-symbols-outlined">add_to_photos</span>
          Create</li>
        <Link to={`/profile/${username}`}>
        <span class="material-symbols-outlined">person</span>
          Profile</Link>
     </ul>
     <div className=' flex text-xl my-auto mr-9 b-0'>
     <span class="material-symbols-outlined">menu</span>
      More</div>
    </div>
  )
}
