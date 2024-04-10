import React from 'react'
import Button from './Button'

const Conclude = () => {
  return (
    <>
    <div className='sm:w-full h-4/5 bg-blue-950  text-center text-white'>
        <h1 className='sm:text-4xl font-bold py:12 sm:py-16'>Win more business with less work.</h1>
        <h3 className='text-sm sm:text-2xl tracking-tighter w-3/5 mx-auto'>Routing Forms help you screen and qualify website visitors, automate scheduling, and offer a seamless customer experience.  </h3>
       
       <div className='py-8'>
         <Button title={"Start for free"} bordercolor={"white"}/>
         <Button title={"Talk to sales"} bordercolor={'white'}/>
       </div>

    </div>
    </>
  )
}

export default Conclude