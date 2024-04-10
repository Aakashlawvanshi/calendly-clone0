import React from 'react'
import Simple from '../assets/Simple.png'


const CardThree = () => { 
  return (
    <>
    <div className='flex justify-around  mt-8 sm:mt-12 gap-4 md:p-20 md:gap-20  sm:w-full xl:h-screen'>
        <div>
        <h4 className='text-blue-500 sm:font-medium text-xs md:text-xl'>SIMPLE AND INTUITIVE</h4>
        <div className=' py-2 w-32 sm:w-auto md:w-full'>
        <h1 className='font-bold md:text-2xl lg:text-4xl text-blue-950 leading-4 sm:leading-5 md:leading-snug tracking-tight'>Build and publish a form in minutes</h1>
       
        <p className='text-xs md:text-2xl my-3  text-indigo-900 '>Quickly get started with a straightforward from-building experience, which Calendly admins create and manage for teams. Share via link or embed on your website.
        </p>
       
       </div>
        </div>
       <img className='w-32 h-32 sm:w-80 sm:h-80  lg:w-4/5 lg:h-4/5 align-middle place-self-center lg:place-self-auto' src={Simple} alt="" />
    </div>



    </>
  )
}

export default CardThree