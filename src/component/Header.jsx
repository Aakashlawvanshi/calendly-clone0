import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='flex justify-between  w-full py-5 px-2  md:px-6 text-center  font-bold text-xs '>
        <div className='flex   sm:gap-2 '>
        <img className='w-4 h-4 sm:w-12 sm:h-12' src={Logo} alt="Logo" />
        <h1 className='text-xs sm:text-4xl text-blue-600'>Calendly</h1>
        </div>

        <ul className='  flex gap-1 sm:gap-2 lg:gap-3 pt-1 sm:pt-4 lg:text-lg text-[6px] sm:text-[10px]'>
     
            <li>
                <a href="/individuals">Individuals</a>
            </li>
            <li>
                <a href="/teams">Teams</a>
            </li>
            <li>
                <a href="/enterprise">Enterprise</a>
            </li>
            <li>
                <a href="/product">Products</a>
            </li>
            <li>
                <a href="/pricing">Pricing</a>
            </li>
            <li>
                <a href="/resources">Resources</a>
            </li>
        </ul>
        <div className=' flex  md:gap-3 lg:text-xl sm:text-[10px] text-[6px]'>
            <h2 className='pt-1 sm:pt-4 '>Log In</h2>
           <div className='w-1px h-1px sm:h-auto sm:w-auto text-xs'> 
           <Button  title={"Get started"} bordercolor={"black"}/>
           </div>
        </div>
        {/* <div className='sm:hidden block'>
            <a href="#">&#8801;</a>
        </div> */}
    </header>
  )
}

export default Header