import React from 'react'
import Faster from '../assets/Faster.png'


const CardFour = () => {
  return (
    <>
    <div className='flex justify-around   mt-8 sm:mt-12 gap-2 md:p-20 md:gap-10  sm:w-full xl:h-screen '>

    <img className='w-32 h-32 sm:w-80 sm:h-80 lg:w-4/5 lg:h-4/5 align-middle place-self-center lg:place-self-auto' src={Faster}alt="" />
        <div>
        <h4 className='text-blue-500 sm:font-medium text-xs md:text-xl'>FASTER CONNECTIONS</h4>
        <div className=' py-2 w-32 sm:w-54 md:w-full'>
        <h1 className='font-bold md:text-2xl lg:text-4xl w-1/2 text-blue-950 tracking-tighter leading-4 sm:leading-5 md:leading-snug'>No more missed opportunities</h1>
       
        <p className='text-xs md:text-2xl my-3  text-indigo-900 '>Embed Routing Forms to your website and eliminate the booking delays and customer drop off typically caused by manual follow up.
        </p>
       
       </div>
        </div>
       
    </div>
        



    </>
  )
}

export default CardFour