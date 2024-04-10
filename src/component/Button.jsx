import React from 'react'

const Button = ({title,bordercolor}) => {
  return (
    <>
    
     <button className={`hover:bg-blue-500 hover:text-white border border-${bordercolor} rounded-full 
     tracking-tighter px-2 py-[2px]  m-1 sm:px-8 sm:py-4 sm:mx-1 text-[7px] sm:text-[15px] lg:text-lg  font-semibold`} >{title}</button>
     
    </>
  )
}

export default Button