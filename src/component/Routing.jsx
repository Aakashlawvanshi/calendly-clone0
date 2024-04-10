import React from 'react'
import Rout from '../assets/Routing.png'


const Routing = () => {
  return (
    <>
    <div className='w-full h-4/5 bg-blue-950 md:mb-40'>

    <h1 className='text-sky-300 text-center pt-12'>VIDEO</h1>
    <div className=' w-1/2 my-4 mx-auto relative '>
    <h1 className='text-white text-center pb-28 sm:text-5xl md:leading-snug sm:font-medium  sm:pb-72'>See what you can do with Routing Forms</h1>
    <div className=' absolute top-20 sm:top-52  md:top-60'>
        <img className='sm:h-96 sm:w-96 md:h-auto md:w-auto' src={Rout} alt="" />
    </div>
    </div>
    </div>
    </>
  )
}

export default Routing