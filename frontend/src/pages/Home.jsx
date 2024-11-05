import React from 'react'
import Navbar from '../components/Navbar'
import SuggestionBox from '../components/SuggestionBox'
import Posts from './Posts'

export default function Home() {
  return (
    <>
      <div className='flex overflow-hidden h-screen w-full'>
          <div className='w-[20%]'><Navbar/></div>
          <div className=' w-[80%] overflow-scroll flex '>
               <Posts/>
              <SuggestionBox/>
          </div>
      </div>
    </>
  )
}
