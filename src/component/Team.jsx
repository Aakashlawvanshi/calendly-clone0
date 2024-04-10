import React from 'react'
import Button from './Button'
import Burke from '../assets/Burke.png'


const Team = () => {
  return (
   <>
   <div className=' flex sm:justify-around  items-center m-auto  bg-blue-50  w-full sm:h-screen gap-2'>
       <img className=' w-40 h-40 sm:w-auto sm:h-96  rounded-3xl' src={Burke} alt="" />
       <div className='w-1/2'>
        <p className='text-blue-950 text-xs sm:text-3xl font-bold pt-2 leading-3  md:leading-8'>
        "Before adding Calendly Routing Forms, 60% of people who started to book a meeting on our website did not complete the booking. Now we're automatically sending demos to specific resp based on company size, which has created better experiences for both customers and employees. We're winning more business with less work."
        </p>
        <h3 className='text-blue-950 text-xs sm:text-xl font-medium py-3 sm:pt-8'>Kenneth Burke</h3>
        <h4 className='text-blue-950 text-xs sm:text-lg  sm:py-3'>Vice President of Marketing, Text request</h4>
        <button className='h-6 w-6 sm:h-12 sm:w-12 hover:bg-blue-500 bg-gray-300 text-white text-2xl  mx-1 sm:my-4 sm:p-2 rounded-full'>&larr; </button>
        <button className='h-6 w-6 sm:h-12 sm:w-12 hover:bg-blue-500 bg-gray-300 text-white text-2xl  mx-1 sm:my-4 sm:p-2 rounded-full'>&rarr;</button>
       </div>
   </div>
   </>
  )
}

export default Team