import React from 'react'
import Better from '../assets/Better.png'


const CardOne = () => {
  return (
    <>
    <div className='flex justify-around   my-8 sm:mt-12 gap-4 md:p-20 md:gap-20  w-full xl:h-screen'>
        <div>
        <h4 className='text-blue-500 sm:font-medium text-xs md:text-xl'>BETTER CONVERSIONS</h4>
        <div className=' py-2 w-32 sm:w-auto md:w-full'>
        <h1 className='font-bold md:text-2xl lg:text-4xl text-blue-950  sm:leading-5 md:leading-snug'>Screen and qualify website visitors or invitees</h1>
       
        <p className='text-xs md:text-2xl my-3  text-indigo-900  '>Prioritize scheduling with high-value leads based on industry, company size and other requirements. Send
            people who aren't a fit to a refferal page or other resource.
        </p>
       
       </div>
        </div>
       <img className='w-32 h-32 sm:w-80 sm:h-80  lg:w-4/5 lg:h-4/5 place-self-center lg:place-self-auto' src={Better} alt="" />
    </div>
    </>
  )
}

export default CardOne