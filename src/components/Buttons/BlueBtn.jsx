import React from 'react'

const BlueBtn = ({text='Click', textSize='14px', onClick}) => {

  return (
    <button
      onClick={onClick}
      style={{
       fontSize:`${textSize}`
      }}
      className='cursor-pointer px-3 py-1 bg-blue-500 text-zinc-50 shadow-md dark:shadow-zinc-500/15 font-medium rounded 
       hover:bg-blue-600
       active:bg-blue-400
       transition-all duration-200 ease-out'
      >{text}
    </button>
  )
}

export default BlueBtn;