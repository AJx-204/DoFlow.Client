import { IconBtn, OrgTimeline } from '@/components'
import { useUIState } from '@/global';
import React from 'react'
import { FaListAlt } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Columns3, AlignJustify,} from 'lucide-react'
import { useLocation } from 'react-router-dom';
import { FaCrown } from "react-icons/fa";

const TopBar = () => {

  const { membersShowInList, setMembersShowInList, taskShowInBoard, setTaskShowInBoard } = useUIState();

  const location = useLocation();

  return (
    <div className='flex items-center justify-between w-full max-h-[56px] border-b-2 border-zinc-500/10 p-2 px-4 bg-zinc-50 dark:bg-[#1c1c1c] smooth'>
       {(location.pathname.includes('Members') || location.pathname.includes('team-members'))&& (
        <div className='flex gap-2 items-center justify-center'>
           <IconBtn 
            onClick={()=>setMembersShowInList(true)}
            className={`${membersShowInList ? "bg-zinc-500/20 shadow" : "hover:bg-zinc-500/20"} text-sm p-2 pr-3 rounded `}
            text='List'
            icon={<FaListAlt className='mt-1'/>}
            />
           <IconBtn 
            onClick={()=>setMembersShowInList(false)}
            className={`${!membersShowInList ? "bg-zinc-500/20 shadow" : " hover:bg-zinc-500/20"} text-sm p-2 pr-3 rounded `}
            text='Grid'
            icon={< IoGrid className='mt-1'/>}
            />
       </div>
       )}
        {location.pathname.includes('project') && (
        <div className='flex gap-2 items-center justify-center'>
           <div className='relative group'>
              <IconBtn 
               onClick={()=>setTaskShowInBoard(true)}
               className={`${taskShowInBoard ? "bg-zinc-500/20 shadow" : "hover:bg-zinc-500/20"} text-sm p-2 pr-3 rounded`}
               text='Board'
               icon={<Columns3 strokeWidth={2.5}  size={18} className='mt-1'/>}
               />
               <FaCrown className='group-hover:scale-120 group-hover:-rotate-30 smooth border rounded-full p-[1px]  absolute -top-1 -left-1 text-yellow-500 shadow bg-yellow-50 shadow-yellow-500' size={15}/>
           </div>
           <IconBtn 
            onClick={()=>setTaskShowInBoard(false)}
            className={`${!taskShowInBoard ? "bg-zinc-500/20 shadow" : " hover:bg-zinc-500/20"} text-sm p-2 pr-3 rounded `}
            text='Table'
            icon={< AlignJustify strokeWidth={3} size={18} className='mt-1'/>}
            />
       </div>
       )}
       <div></div>
       <OrgTimeline/>
    </div>
  )
}

export default TopBar