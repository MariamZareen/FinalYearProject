import React from 'react'
import SuggestionBox from '../components/SuggestionBox'

export default function Posts() {
  return (
    
   <>
    <div className='maincontent w-[80%] '>
         {/* <div className="stories flex  h-[14%] p-4">
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
         </div> */}
         <div className="posts flex flex-col  items-center my-5 ">

              <div className="box w-[500px] h-auto p-3 my-3  border-b-2 border-slate-300">
                   <div className="name flex">
                       <div className="rounded-[50%] border-slate-900 border-2 w-12 bg-slate-300 mx-2"></div>
                       <div>
                         <p className='font-bold text-blue-500 text-lg mulish'>1NT21CS165    <span className='text-slate-500 text-semibold'>1d</span></p>
                         <p>Plant Disease Detection</p>
                       </div>
                       
                   </div>
                   <img src="https://journals.plos.org/plosone/article/figure/image?size=large&id=10.1371/journal.pone.0243243.g003" alt="" className='h-[500px] mx-auto mt-3' />
                   <div className="likes flex mx-auto w-[90%] my-3 ">
                   <span class="material-symbols-outlined">favorite</span>
                   <span class="material-symbols-outlined">chat_bubble</span>
                   <span class="material-symbols-outlined">send</span>
                  <div className='ml-auto'> <span class="material-symbols-outlined">bookmark</span></div>
                   </div>
                   <div className="likesNo font-bold">10,239 likes</div>
                   <div className="comments">Machine learning (ML) and deep learning (DL) techniques are increasingly used to detect plant diseases from digital images. These techniques can help farmers identify diseases early, save resources, and prevent economic losses</div>

              </div>

              <div className="box w-[500px] h-auto p-3 my-3  border-b-2 border-slate-300">
                   <div className="name flex">
                       <div className="rounded-[50%] border-slate-900 border-2 w-12 bg-slate-300 mx-2"></div>
                       <div>
                         <p className='font-bold text-blue-500 text-lg'>1NT21CS087    <span className='text-slate-500 text-semibold'>1d</span></p>
                         <p>Sign Languague Interpreter</p>
                       </div>
                       
                   </div>
                   <img src="https://i.etsystatic.com/12596029/r/il/b4022e/4072511605/il_fullxfull.4072511605_sdhy.jpg" alt="" className='h-[500px] mx-auto mt-3' />
                   <div className="likes flex mx-auto w-[90%] my-3 ">
                   <span class="material-symbols-outlined">favorite</span>
                   <span class="material-symbols-outlined">chat_bubble</span>
                   <span class="material-symbols-outlined">send</span>
                  <div className='ml-auto'> <span class="material-symbols-outlined">bookmark</span></div>
                   </div>
                   <div className="likesNo font-bold ">34,10,239 likes</div>
                   <div className="comments">American Sign Language (ASL) is a natural language that serves as the predominant sign language of Deaf communities in the United States and most of Anglophone Canada. ASL possesses a set of 26 signs known as the American manual alphabet, which can be used to spell out words from the English language. Source: https://en.wikipedia.org/wiki/American_Sign_Language</div>

              </div>


              <div className="box w-[500px] h-auto p-3 my-3  border-b-2 border-slate-300">
                   <div className="name flex">
                       <div className="rounded-[50%] border-slate-900 border-2 w-12 bg-slate-300 mx-2"></div>
                       <div>
                         <p className='font-bold text-blue-500 text-lg'>1NT22CS412    <span className='text-slate-500 text-semibold'>1d</span></p>
                         <p>JavaScript Tutorials</p>
                       </div>
                       
                   </div>
                   <img src="https://m.media-amazon.com/images/I/415rkoR4-BL._UF1000,1000_QL80_.jpg" alt="" className='h-[500px] mx-auto mt-3' />
                   <div className="likes flex mx-auto w-[90%] my-3 ">
                   <span class="material-symbols-outlined">favorite</span>
                   <span class="material-symbols-outlined">chat_bubble</span>
                   <span class="material-symbols-outlined">send</span>
                  <div className='ml-auto'> <span class="material-symbols-outlined">bookmark</span></div>
                   </div>
                   <div className="likesNo font-bold">10,239 likes</div>
                   <div className="comments">I have started learning JavaScript as it has currently become the second most used languages. It is mainly used for web development. Both the frontend and backend can be easily designed using Javascript. You need not learn multiple languages for this. </div>

              </div>
         </div>
    </div>
          <SuggestionBox/>
   </>

  )
}
