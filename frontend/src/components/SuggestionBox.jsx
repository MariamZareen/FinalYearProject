import React from 'react'

export default function SuggestionBox() {
  return (
    <div className='suggestions  w-[45%]'>
        <div className='flex m-10 p-5 font-semibold'>
                        <span class="material-symbols-outlined">person</span>
                       1NT21CS102
                        <p className='text-blue-900 ml-auto '>Switch</p>
                     </div>
                     <p className="text-slate-600 font-semibold ml-10">Suggested for you</p>
                     <div>
                           
                         <div className='flex mx-10 my-2 p-5 font-semibold'>
                           <span class="material-symbols-outlined">person</span>
                            1NT21CS087
                         <p className='text-blue-900 ml-auto '>follow</p>
                         </div>
                         <div className='flex mx-10 my-2 p-5 font-semibold'>
                           <span class="material-symbols-outlined">person</span>
                            1NT21CS165
                         <p className='text-blue-900 ml-auto '>follow</p>
                         </div>
                         <div className='flex mx-10 my-2 p-5 font-semibold'>
                           <span class="material-symbols-outlined">person</span>
                            1NT22CS412
                         <p className='text-blue-900 ml-auto '>follow</p>
                         </div>
                        

                     </div>
    </div>
  )
}
