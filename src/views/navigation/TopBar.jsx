import { IconBtn } from '@/components'
import { useUIState } from '@/global';
import React from 'react'
import { FaListAlt } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const TopBar = () => {

  const { membersShowInList, setMembersShowInList } = useUIState();

  const location = useLocation();

  return (
    <div className='flex justify-between items-center w-screen max-h-[56px] border-b-2 border-zinc-500/10 p-2 px-4 bg-zinc-100 dark:bg-[#1c1c1c] smooth'>
       {(location.pathname.includes('Members') || location.pathname.includes('team-members'))&& (
        <div className='flex gap-2 items-center justify-center'>
           <IconBtn 
            onClick={()=>setMembersShowInList(true)}
            className={`${membersShowInList ? "bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800" : "hover:bg-zinc-500/20"} text-sm p-2 rounded `}
            text='List'
            icon={<FaListAlt className='mt-1'/>}
            />
           <IconBtn 
            onClick={()=>setMembersShowInList(false)}
            className={`${ !membersShowInList ? "bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800" : " hover:bg-zinc-500/20"} text-sm p-2 rounded `}
            text='Grid'
            icon={< IoGrid className='mt-1'/>}
            />
       </div>
       )}
    </div>
  )
}

export default TopBar