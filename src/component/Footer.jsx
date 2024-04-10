import React from 'react'
import Insta from '../assets/insta.png'
import twitter from '../assets/twitter-icon.png'
import linkedIn from '../assets/linkedIn.png'
import Youtube from '../assets/Youtube.png'
import fb from '../assets/facebook.png'
import AppStore from '../assets/AppStore.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   <>
     <div className='flex justify-around  md:h-screen py-10 sm:py-24 mx-1 text-xs sm:text-lg'>
        <div className='w-1/3' >
            <h1 className='sm:text-5xl text-blue-950 font-bold py-2'>Easy</h1>
            <h1 className='sm:text-5xl text-blue-700 font-bold'>ahead</h1>
            <h1 className='sm:text-xl text-blue-950 tracking-tighter sm:tracking-tight py-8'>
                We take the work out of connecting with others so you can accomplish more.
            </h1>
        <div className='py-6 font-bold'>
               <select className='w-3/4 border border-solid-black p-2'>
                <option value="#">English</option>
                <option value="#">Spanish</option>
                <option value="#">Russian</option>
               </select>
       </div>
         
         <div className='w-3/5 py-8'>
            <img src={AppStore} alt="" /> 
         </div>



         <div className='flex justify-around w-1/2 my-6'>
            <img className='w-3 h-3 sm:w-6 sm:h-6' src={twitter} alt="" />
            <img className='w-3 h-3 sm:w-6 sm:h-6' src={fb} alt="" />
            <img className='w-3 h-3 sm:w-6 sm:h-6' src={Insta} alt="" />
            <img className='w-3 h-3 sm:w-6 sm:h-6' src={linkedIn} alt="" />
            <img className='w-3 h-3 sm:w-6 sm:h-6' src={Youtube} alt="" />
         </div>

         

        </div>

            {/* Service section starts here */}      

    
           <div className=' text-blue-950 '>
                <ul>
                    <li>
                        <h1 className='sm:text-xl font-bold py-2'>About</h1>
                    </li>
                    <li className='py-2'>
                        <a href="#">About Calendly</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Contact Sales</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Newsroom</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Careers</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Security</a>
                    </li>

                </ul>   

                <ul>
                <li className='py-2 pt-4'>
                    <h1 className='sm:text-xl font-bold '>Support</h1>
                    </li>
                    <li className='py-2'>
                        <a href="#">Help Center</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Video Tutorials</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Cookie Setting</a>
                    </li>

                </ul> 
            </div> 

            <div className=' text-blue-950'>
                <ul>
                <li className='py-2'>
                        <h1 className='sm:text-xl font-bold'>Solutions</h1>
                    </li>
                    <li className='py-2'>
                        <a href="#">Customer Success</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Sales</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Recruiting</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Information Technology</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Marketing</a>
                    </li>

                </ul>   

                <ul>
                <li className='py-2 pt-4'>
                    <h1 className='sm:text-xl font-bold'>Add-Ons</h1>
                    </li>
                    <li className='py-2'>
                        <a href="#">Download for Chrome</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Download for Firefox</a>
                    </li>
                    

                </ul> 
            </div> 

            <div className=' text-blue-950'>
                <ul>
                <li className='py-2 '>
                    <h1 className='sm:text-xl font-bold'>Popular Features</h1>
                    </li>
                    <li className='py-2'>
                        <a href="#">Embed Calendly</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Availability</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Sending Notification</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">Using Calendly Mobile</a>
                    </li>
                    <li className='py-2'>
                        <a href="#">   </a>
                    </li>

                </ul>   

                <ul>
                <li className='py-2 pt-10'>
                    <h1 className='sm:text-xl font-bold'>Developers</h1>
                    </li>
                    <li className='py-2'>
                        <a href="#">Developer Tools</a>
                    </li>
                    <li className='py-2'>
                        <a href="#"> </a>
                    </li>
                    <li className='py-2'>
                        <a href="#">  </a>
                    </li>

                </ul> 



                
            </div> 

        
     </div>
          <div className='flex justify-between px-1'>
          <h1 className='text-xs text-gray-500 font-thin py-6'>Copyright Calendly 2022</h1>
          <h3 className='text-xs text-gray-500 font-thin py-6'>Privacy / Terms and Conditions</h3>
          </div>
   </>
  )
}

export default Footer