import React from 'react'

export default function Posts() {
  return (
    
    <div className='maincontent w-[80%] '>
         <div className="stories flex  h-[14%] p-4">
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
             <div className="rounded-[50%] border-slate-900 border-2 w-16 bg-slate-300 mx-2"></div>
         </div>
         <div className="posts flex flex-col  items-center my-5 ">

              <div className="box w-[500px] h-auto p-3 my-3  border-b-2 border-slate-300">
                   <div className="name flex">
                       <div className="rounded-[50%] border-slate-900 border-2 w-12 bg-slate-300 mx-2"></div>
                       <div>
                         <p className='font-bold'>vickykaushal    <span className='text-slate-500 text-semibold'>1d</span></p>
                         <p>Obsessed</p>
                       </div>
                       
                   </div>
                   <img src="https://filmfare.wwmindia.com/content/2023/sep/vickykaushal11695193533.jpg" alt="" className='h-[500px] mx-auto mt-3' />
                   <div className="likes flex mx-auto w-[90%] my-3 ">
                   <span class="material-symbols-outlined">favorite</span>
                   <span class="material-symbols-outlined">chat_bubble</span>
                   <span class="material-symbols-outlined">send</span>
                  <div className='ml-auto'> <span class="material-symbols-outlined">bookmark</span></div>
                   </div>
                   <div className="likesNo font-bold">10,239 likes</div>
                   <div className="comments">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi id iste voluptates culpa maiores atque debitis similique, repellat minus rerum labore optio dignissimos ipsum, soluta distinctio numquam eum! Laudantium.</div>

              </div>

              <div className="box w-[500px] h-auto p-3 my-3  border-b-2 border-slate-300">
                   <div className="name flex">
                       <div className="rounded-[50%] border-slate-900 border-2 w-12 bg-slate-300 mx-2"></div>
                       <div>
                         <p className='font-bold'>hrithikroshan    <span className='text-slate-500 text-semibold'>1d</span></p>
                         <p>Mumbai, India</p>
                       </div>
                       
                   </div>
                   <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXdFC-3yQ_9g54dcDmZzT8uSJr7SFx4_38RzSF_jB6emkv8deU" alt="" className='h-[500px] mx-auto mt-3' />
                   <div className="likes flex mx-auto w-[90%] my-3 ">
                   <span class="material-symbols-outlined">favorite</span>
                   <span class="material-symbols-outlined">chat_bubble</span>
                   <span class="material-symbols-outlined">send</span>
                  <div className='ml-auto'> <span class="material-symbols-outlined">bookmark</span></div>
                   </div>
                   <div className="likesNo font-bold ">34,10,239 likes</div>
                   <div className="comments">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi id iste voluptates culpa maiores atque debitis similique, repellat minus rerum labore optio dignissimos ipsum, soluta distinctio numquam eum! Laudantium.</div>

              </div>
         </div>
    </div>
  )
}
