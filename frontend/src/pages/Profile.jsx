import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import  axios  from 'axios';
import Navbar from '../components/Navbar'
import {useAuth} from '../AuthContext'
import Spinner from '../components/Spinner';
export default function Profile() {
  const { username } = useAuth();
  const [data,setData]=useState();
  const [loading,setLoading]=useState(false);
 
  useEffect(() => {
    setLoading(true)
     axios.get(`http://localhost:5000/profile/${username}`)
       .then((res) => {
         setData(res.data);
         setLoading(false)
       })
       .catch(() => {
        setLoading(false)
         console.log("Error receiving profile data from axios");
       });
   }, [username]); 


  return (
    <div className='flex overflow-hidden h-screen w-full'>
         
          <div className='w-[20%]'><Navbar/></div>
           <div className='w-[80%] overflow-scroll'>
           <div className="top h-[60%]  flex flex-col items-center w-[80%] mx-auto border-b-2 border-slate-200">
             <div className="profile flex justify-around  h-[50%] w-[70%] mt-[5%] text-xl">
                {loading && <Spinner />}
                 <img src={data && data.dp} alt="" className='rounded-[50%] border-slate-200 border-2 w-[20%]  mx-5 h-[65%]' />
                 <div className='flex flex-col w-[60%] mt-2'>
                 <div className='flex flex-col justify-between'>
                      <div className='flex justify-between'>
                      
                      <p>{data && data.user}</p>
                      {loading && <Spinner />}
                      <Link to='/editprofile' className='bg-blue-500 p-2 rounded text-white text-lg cursor-pointer'>Edit Profile</Link>
                      </div>
                 </div>
                 <div className='flex justify-around mt-[4%]'>
                   <p>{data && data.post} posts</p>
                   <p>{data && data.followers} followers</p>
                   <p>{data && data.following} following</p>
                 </div>
                 </div>
             </div>
             <div className="highlights flex h-[29%] w-[80%] ">
                  <div className='flex flex-col w-[12%] mx-2 items-center'>
                      <div className="rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center">
                       <span class="material-symbols-outlined plus">add</span></div>
                       <p className='font-bold mt-2'>New</p>
                  </div>
                  <div className='flex flex-col w-[12%] mx-2 items-center'>
                       <img src="https://lp-cms-production.imgix.net/2020-09/LPT_Extras_087.jpg?auto=format&w=730&h=630&fit=crop&q=75" className='rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center' alt=''/>
                       <p className='font-bold mt-2'>Italy</p>
                  </div>
                  <div className='flex flex-col w-[12%] mx-2 items-center'>
                       <img src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" className='rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center' alt='' />
                       <p className='font-bold mt-2'>Paris</p>
                  </div>
                  <div className='flex flex-col w-[12%] mx-2 items-center'>
                       <img src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fatlys%2F959b4d70-99d1-45a7-90bd-586fe45bbdf1_Atlantis_%2BThe%2BPalm%252C%2BDubai%252C%2BUnited%2BArab%2BEmirates.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C320%2C4927%2C2587%26w%3D1200%26h%3D630&w=3840&q=100" className='rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center' alt='' />
                       <p className='font-bold mt-2'>Dubai</p>
                  </div>
             </div>
         </div>


         <div className="bottom">

         </div>



       </div>
      </div>

  )
}
