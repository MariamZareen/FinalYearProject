import React , {useState,useEffect} from 'react'
import {useAuth} from '../AuthContext'
import axios from 'axios';
//import ChangePic from './ChangePic';

export default function EditingForm() {
    const { username } = useAuth();
    const [data,setData]=useState();
    const [loading,setLoading]=useState(false);
    const [link,setLink]=useState("");
    const [bio,setBio]=useState("");
    const [gender,setGender]=useState("male");

   
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
   
     console.log(data)
    const [isChangePicOpen, setChangePicOpen] = useState(false);

    const changePhoto = () => {
      setChangePicOpen(true);
    };

    function ChangePic({ onClose }) {
        return (
          <div className='fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-900 flex justify-center items-center'>
            <div className='w-[30%] h-[30%] rounded-xl bg-white  flex flex-col justify-around items-center'>
              <p className='border-b-1 border-slate-200 text-xl '>Change Profile Photo</p>
              <p className='border-b-1 border-slate-200 text-blue-500 font-semibold'>Upload Photo</p>
              <p className='border-b-1 border-slate-200 text-red-500 font-semibold'>Remove Current Photo</p>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        );
      }

    function handleSubmit(){
        const data={link,bio};
    }
    
    return (
        <div className='w-[70%] flex justify-center items-center overflow-y-scroll'>

            <div className="maindiv w-[80%]  p-5 flex flex-col justify-around mt-[30%]">
                <h1 className='text-2xl font-bold mt-[50px] mb-3 mx-5'>Edit Profile</h1>
                <div className="changepic flex justify-between items-center mx-3 p-2 bg-slate-200 rounded-xl">
                    {loading && data}
                    <div className='flex items-center'>
                        <img src={data && data.dp} alt="" className='rounded-[50%] border-slate-200 border-2 w-[20%]  mx-5 ' />
                        <p className='text-lg'>{data && data.user}</p>
                    </div>
                    <button className='bg-blue-500 text-white rounded-xl p-3 w-[60%]' onClick={changePhoto}>Change Photo</button>
                    {isChangePicOpen && <ChangePic onClose={() => setChangePicOpen(false)} />}
                </div>

                <div className='p-5'>
                    <p className='font-bold text-xl p-2'>Website</p>
                    <input type="text" placeholder='Website' className='w-[100%] p-3 rounded-xl bg-slate-200' onChange={(e)=>{setLink(e.target.value)}}/>
                </div>

                <div className='p-5'>
                    <p className='font-bold text-xl p-2'>Bio</p>
                    <textarea type="text" placeholder='Bio' className='w-[100%] p-3 rounded-xl bg-slate-200'  onChange={(e)=>{setBio(e.target.value)}}/>
                </div>

                <div className='p-5'>
                    <p className='font-bold text-xl p-2'>Gender</p>
                    <select name="" id="" className='w-[100%] p-3 rounded-xl bg-slate-200'  onChange={(e)=>{setGender(e.target.value)}}>
                        <option value='female' >Female</option>
                        <option value="male">Male</option>
                        <option value="others">Prefer not to say</option>
                    </select>
                    <p>This won't be a part of profile</p>
                </div>

                <div className='p-5'>
                    <p className='font-bold text-xl p-2'>Show account suggestions on profiles</p>
                    <select name="" id="" className='w-[100%] p-3 rounded-xl bg-slate-200'>
                        <option value='female' >Yes</option>
                        <option value="male">No</option>
                    </select>
                </div>

                <button className='bg-blue-500 text-white rounded-xl p-3 w-[60%] mx-auto mt-[5%]' onSubmit={handleSubmit}>Submit</button>
                 <div className="footer h-[100px]"></div>
            </div>

        </div>
    )
}
