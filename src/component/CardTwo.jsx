import React from 'react'
import Automate from '../assets/Automated.png'


const CardTwo = () => {
  return (
    <>
    <div className='flex justify-around mt-24 sm:mt-20 lg:mt-30 gap-4 md:p-20 md:gap-20  w-full xl:h-screen '>

<img className='w-32 h-32 sm:w-80 sm:h-80 lg:w-4/5 lg:h-4/5 align-middle place-self-center lg:place-self-auto' src={Automate} alt="" />
    <div>
    <h4 className='text-blue-500 sm:font-medium text-xs md:text-xl'>AUTOMATED EXPERIENCE</h4>
    <div className=' py-2 w-32 sm:w-54 md:w-full'>
    <h1 className='font-bold md:text-2xl lg:text-4xl text-blue-950 leading-4 sm:leading-5 md:leading-snug'>Schedule efficiently and save everyone time</h1>
   
    <p className='text-xs md:text-2xl my-3  text-indigo-900 '>The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.
    </p>
   
   </div>
    </div>
   
</div>
    
    </>
  )
}

export default CardTwo