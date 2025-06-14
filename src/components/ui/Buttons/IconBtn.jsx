import React from 'react'
import { RiInformationFill } from "react-icons/ri";


const IconBtn = ({
    text='Information', 
    icon=<RiInformationFill size={18}/>,
    gap='8px', 
    className='',
    onClick 
}) => {

  return (
    <button
      onClick={onClick}
      style={{
        gap:`${gap}`
      }}
      className={`cursor-pointer flex items-center ${className}`}
      >
        {icon}
        {text}
    </button>
  )
}

export default IconBtn;