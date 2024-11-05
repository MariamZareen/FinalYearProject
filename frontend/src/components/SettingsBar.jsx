import React from 'react'

export default function SettingsBar() {
  return (
    <div className='w-[30%] bg-slate-100 p-4 overflow-y-scroll'>
    <h1 className='text-2xl font-bold mt-[50px] mb-3 mx-5'>Settings</h1>
    <div className="dialogBox rounded-xl bg-slate-300 flex flex-col p-3 text-sm pb-5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="" className='w-[28%]' />
        <h2 className='text-lg font-bold my-1'>Accounts Center</h2>
        <p className='my-1 mb-2'>Manage your connected experiences and account settings across Meta technologies</p>
        <div className='flex my-1'>
            <span class="material-symbols-outlined">person</span>
            <p>Personal details</p>
        </div>
        <div className='flex my-1'>
            <span class="material-symbols-outlined">verified_user</span>
            <p>Password and Security</p>
        </div>
        <div className='flex my-1'>
            <span class="material-symbols-outlined">settings_accessibility</span>
            <p>Ad preferences</p>
        </div>
    </div>

    <div className="subBoxes flex flex-col my-3">
        <p className='text-sm my-2 text-slate-900'>How you use Instagram</p>
        <div className='flex h-[2%] p-3 rounded bg-slate-300 my-1'>
            <span class="material-symbols-outlined">account_circle</span>
            <p>Edit Profile</p>
        </div>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
        <span class="material-symbols-outlined">notifications</span>
            <p>Notifications</p>
        </div>
    </div>


    <div className="subBoxes flex flex-col my-3">
        <p className='text-sm my-2 text-slate-900'>What you see</p>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
        <span class="material-symbols-outlined">notifications_off</span>
            <p>Muted accouts</p>
        </div>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
        <span class="material-symbols-outlined">favorite</span>
            <p>Like and share counts</p>
        </div>
    </div>

    <div className="subBoxes flex flex-col my-3">
        <p className='text-sm my-2 text-slate-900'>Who can see your content</p>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
            <span class="material-symbols-outlined">lock</span>
            <p>Privacy</p>
        </div>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
        <span class="material-symbols-outlined">diversity_1</span>
            <p>Close Friends</p>
        </div>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
        <span class="material-symbols-outlined">block</span>
            <p>Blocked</p>
        </div>
        <div className='flex h-[2%] p-3 rounded hover:bg-slate-300 my-1'>
        <span class="material-symbols-outlined">hide</span>
            <p>Hide story and live</p>
        </div>
    </div>



</div>
  )
}
