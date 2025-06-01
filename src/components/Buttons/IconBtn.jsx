import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";

const IconBtn = ({
    text='Click', 
    icon: Icon = IoIosInformationCircle, 
    iconClass='text-zinc-500',
    gap='14px', 
    className='',
    onClick 
}) => {

  return (
    <button
      onClick={onClick}
      className={`flex items-center ${className}`}
      >
        <Icon className={`${iconClass}`}/>
        {text}
    </button>
  )
}

export default IconBtn;