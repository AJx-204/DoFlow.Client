import React from 'react'
import { useSelector } from 'react-redux';
import { AvatarGroup, Btn } from '@/global';
import { TbUserPlus } from "react-icons/tb";

const ProjectPage = () => {

  const { project } = useSelector(state => state.project)

  console.log(project)

  return (
    <main className='p-4'>
        {/* project info */}
        <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-1 items-start w-[60%]'>
                <h1 className='text-lg inter font-medium'>{project?.projectName || "Project not selected"}</h1>
                <p className='text-sm text-zinc-500 line-clamp-2'>{project?.description || "No description !"}</p>
            </div>
             <div className='flex gap-2 flex-wrap justify-end'>
                <AvatarGroup users={project?.members.map(m => m.member)}/>
                <Btn 
                  text='Add Member'
                  icon={< TbUserPlus size={16}/>}
                  className='px-3 py-2 rounded-md bg-zinc-500/10 hover:text-blue-500 hover:bg-blue-500/20 text-xs font-medium smooth' 
                  />
             </div>
        </div>
    </main>
  )
}

export default ProjectPage;