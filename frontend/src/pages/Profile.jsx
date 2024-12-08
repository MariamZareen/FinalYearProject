import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import {Link} from 'react-router-dom'
// import Spinner from '../components/Spinner';
import  axios  from 'axios';
import {useAuth} from '../AuthContext'
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
    // <div className='flex overflow-hidden h-screen w-[100%]'>
         
    //        <div className='w-[80%] overflow-scroll'>
    //        <div className="top h-[60%]  flex flex-col items-center w-[80%] mx-auto border-b-2 border-slate-200">
    //          <div className="profile flex justify-around  h-[50%] w-[70%] mt-[5%] text-xl">
    //             {loading && <Spinner />}
    //              <img src={data && data.dp} alt="" className='rounded-[50%] border-slate-200 border-2 w-[20%]  mx-5 h-[65%]' />
    //              <div className='flex flex-col w-[60%] mt-2'>
    //              <div className='flex flex-col justify-between'>
    //                   <div className='flex justify-between'>
                      
    //                   <p>{data && data.user}</p>
    //                   {loading && <Spinner />}
    //                   <Link to='/editprofile' className='bg-blue-500 p-2 rounded text-white text-lg cursor-pointer'>Edit Profile</Link>
    //                   </div>
    //              </div>
    //              <div className='flex justify-around mt-[4%]'>
    //                <p>{data && data.post} posts</p>
    //                <p>{data && data.followers} followers</p>
    //                <p>{data && data.following} following</p>
    //              </div>
    //              </div>
    //          </div>
    //          <div className="highlights flex h-[29%] w-[80%] ">
    //               <div className='flex flex-col w-[12%] mx-2 items-center'>
    //                   <div className="rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center">
    //                    <span class="material-symbols-outlined plus">add</span></div>
    //                    <p className='font-bold mt-2'>New</p>
    //               </div>
    //               <div className='flex flex-col w-[12%] mx-2 items-center'>
    //                    <img src="https://lp-cms-production.imgix.net/2020-09/LPT_Extras_087.jpg?auto=format&w=730&h=630&fit=crop&q=75" className='rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center' alt=''/>
    //                    <p className='font-bold mt-2'>Italy</p>
    //               </div>
    //               <div className='flex flex-col w-[12%] mx-2 items-center'>
    //                    <img src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" className='rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center' alt='' />
    //                    <p className='font-bold mt-2'>Paris</p>
    //               </div>
    //               <div className='flex flex-col w-[12%] mx-2 items-center'>
    //                    <img src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fatlys%2F959b4d70-99d1-45a7-90bd-586fe45bbdf1_Atlantis_%2BThe%2BPalm%252C%2BDubai%252C%2BUnited%2BArab%2BEmirates.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C320%2C4927%2C2587%26w%3D1200%26h%3D630&w=3840&q=100" className='rounded-[50%] border-slate-900 border-2 w-[94%] h-[98%] flex justify-center items-center' alt='' />
    //                    <p className='font-bold mt-2'>Dubai</p>
    //               </div>
    //          </div>
    //      </div>


    //      <div className="bottom">

    //      </div>



    //       </div>
    //   </div>

    <div>
  <div className="container flex flex-col">
    <nav>
      <div className="details">
        <img src="https://cdn-icons-png.freepik.com/256/12594/12594345.png?semt=ais_hybrid" alt="myprofilepic" className="profilepic" />
        <ul>
          <li>
            <h2 className='font-bold'>Mariam Zareen</h2>
          </li>
          <li className="li">Department: Computer Science</li>
          <li className="li">Passout Year: 2025</li>
          <div className="creditsdiv">
            {" "}
            <li className="credits">Credits Earned: 30</li>
          </div>
        </ul>
      </div>
      <img
        src="https://www.sxswedu.com/wp-content/uploads/2020/02/EDU-20-Google-Cloud-EdTech-Developers.jpg"
        alt="developers img"
        className="devs"
      />
    </nav>
    <div className="con2">
      <div className="achievements">
        <h4>Rankings</h4>
        <ul>
          <li>LeetCode: 3932 </li>
          <li>GeeksForGeeks: 1010</li>
          <li>CodeChef: 2201</li>
        </ul>
      </div>
      <div className="achievements">
        <h4>Specializations</h4>
        <ul>
          <li>MERN Stack Developer</li>
          <li>IOS Developer</li>
          <li>Android Developer</li>
        </ul>
      </div>
      <div className="achievements">
        <h4>Interships</h4>
        <ul>
          <li>PayPal </li>
          <li>Google</li>
          <li>Microsoft</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="section2">
    <div className="boxout">
      <h2>Upcoming Events</h2>
      <div className="jets">
        <div className="picsml">
          <img src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png" alt="post" className="sssp w-[350px]" />
        </div>
        <div className="informat">
          <h4>Code Sprint</h4>
          <ul>
            <li>Date of Event: 28/05/2024</li>
            <li>Workshop on Web3 Development</li>
            <li className="grn">Redeemed</li>
          </ul>
        </div>
      </div>
      <div className="jets">
        <div className="picsml">
          <img src="https://www.howtogeek.com/wp-content/uploads/2022/01/shutterstock_2021164787.jpg?height=200p&trim=2,2,2,2" alt="post" className="sssp w-[350px]" />
        </div>
        <div className="informat">
          <h4>Inspire</h4>
          <ul>
            <li>Date of Events: 28/05/2024</li>
            <li>Hackathon on Open Innovation</li>
            <li className="grn">Redeemed</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="boxout">
      <h2>Recent Posts</h2>
      <div className="projects">
        <div className="smallpic">
          <img src="https://journals.plos.org/plosone/article/figure/image?size=large&id=10.1371/journal.pone.0243243.g003" alt="post" className="sp" />
        </div>
        <div className="info">
          <h4>Plant Disease Detection</h4>
          <ul>
            <li>Date of Upload: 18/11/2024</li>
            <li>Number of likes: 200</li>
          </ul>
        </div>
      </div>
      <div className="projects">
        <div className="smallpic">
          <img src="https://i.etsystatic.com/12596029/r/il/b4022e/4072511605/il_fullxfull.4072511605_sdhy.jpg" alt="post" className="sp" />
        </div>
        <div className="info">
          <h4>Sign Language Recognition</h4>
          <ul>
            <li>Date of Upload: 28/10/2024</li>
            <li>Number of likes: 98</li>
          </ul>
        </div>
      </div>
      <div className="projects">
        <div className="smallpic">
          <img src="https://m.media-amazon.com/images/I/415rkoR4-BL._UF1000,1000_QL80_.jpg" alt="post" className="sp" />
        </div>
        <div className="info">
          <h4>Javascript Video</h4>
          <ul>
            <li>Date of Upload: 9/05/2024</li>
            <li>Number of likes: 8</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}
