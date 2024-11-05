import React from 'react'
import Navbar from '../components/Navbar'
import SettingsBar from '../components/SettingsBar';
import EditingForm from '../components/EditingForm';

 export default function EditProfile () {
    return (
        <div className='flex overflow-hidden h-screen w-full'>
            <div className='w-[20%]'><Navbar /></div>
            <div className=' w-[80%] overflow-hidden flex '>
                   <SettingsBar/>
                   <EditingForm/>
            </div>
        </div>
    )
}
