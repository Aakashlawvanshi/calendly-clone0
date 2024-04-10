import React from 'react'
import Button from './Button'

const Lander = () => {
  return (
    <section className='w-full mt-5 sm:mt-16'>
    <div className='text-center '>
        <h4 className='text-blue-500 font-medium text-[7px] sm:text-sm md:text-lg'>ROUTING FORMS</h4>
    </div>
    <div className=''>
    <div className='text-center pt-2 bg-blue-50 '>
      <h1 className='md:text-6xl font-bold tracking-tighter md:leading-loose text-blue-950 '>Make higher quality connections</h1>
      <div className='text-slate-500 text-xs md:text-2xl py-4'>
      <p> Request information from website visitors or invitees and-based on</p> 
           <p>their responses-route them to right person or resource.</p>
      <p class='italic'>Available on Professional plans and up</p>
      </div>
       <div className='p-3 sm:p-8'>
       <Button title={"Start for free"} bordercolor={'black'}/>
       <Button title={"Talk with Sales"} bordercolor={'black'}/>
       </div>
    </div>
    </div>
    </section>
  )
}

export default Lander