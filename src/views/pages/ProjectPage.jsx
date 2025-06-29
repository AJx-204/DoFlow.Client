import React, { useEffect,  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AvatarGroup, Btn, IconBtn, ProjectSection, setSection } from '@/global';
import { TbUserPlus } from "react-icons/tb";
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { ChevronDown }from 'lucide-react';


const ProjectPage = () => {

  const { project } = useSelector(state => state.project)

  const dispatch = useDispatch();

  const { section } = useSelector(state => state.section)

  const [showProInfo, setShowProInfo] = useState(true);

  useEffect(()=>{
    dispatch(setSection(project?.projectSections[0]))
  },[project])  

  return (
    <main className='relative'>
        {/* project info */}
        <div className='flex justify-between items-start px-2 pr-4 py-3'>
            <div className='flex flex-col gap-1 items-start w-[60%]'>
                <h1 className='flex gap-4 items-center text-lg inter font-medium'>
                   <i onClick={()=>setShowProInfo(!showProInfo)} className='p-1 cursor-pointer hover:text-blue-500'>
                     <ChevronDown size={18} className={`${showProInfo ? "-rotate-180 " : ""} smooth`}/> 
                   </i>
                   {project?.projectName || "Project not selected"}
                   <i
                     className='self-end p-0.5 mb-1 bg-zinc-500/10 rounded hover:text-blue-500 text-zinc-500 hover:border-blue-500/40 border border-zinc-500/15'>
                       <RiEdit2Fill size={14}/>
                   </i>
                </h1>
                {showProInfo && <p className='text-sm text-zinc-500 line-clamp-2 pl-2'>{project?.description || "No description !"}</p>}
            </div>
             <div className='flex gap-2 flex-wrap justify-end'>
                <AvatarGroup size='sm' users={project?.members.map(m => m.member)}/>
                <Btn 
                  text='Add Member'
                  icon={< TbUserPlus size={16}/>}
                  className='px-3 py-2 rounded-md bg-zinc-500/10 hover:text-blue-500 hover:bg-blue-500/20 text-xs font-medium smooth'  
                  />
             </div>
        </div>
        <div className='flex md:px-4 px-2 border-b-2 border-zinc-500/10 gap-2 overflow-auto justify-between items-end mb-4'>
           <div className='flex gap-2'>
             {project?.projectSections?.map((s)=>(
              <div key={s._id} className={`${section?.sectionName == s?.sectionName ? "border-b-3 border-purple-600 text-purple-600" : "opacity-60 hover:opacity-100"} flex gap-1 font-medium px-2 py-2  text-sm`} >
                 <Btn  onClick={()=>dispatch(setSection(s))} className='' text={`${s?.sectionName}`}/>
              </div>
             ))}
           </div>
           <IconBtn icon={<IoMdAdd size={17} className='mt-0.5'/>} text='Section' gap='8px' className='h-[max-content] text-zinc-500 text-[13.5px] font-medium px-2 py-2 hover:text-blue-500 border-b-3 border-zinc-50/0 hover:border-blue-500'/>
        </div>
        {section  &&
        <div className='w-full flex justify-between items-center md:px-4 pb-4 px-2'>
           <p className='text-sm text-zinc-500 max-w-[50%] line-clamp-1'>{section?.description}</p>
           <div className='flex gap-2 items-center'>
             <span className='text-xs font-medium text-zinc-500'>CreatedBy - </span>
             <div className='flex gap-2 text-xs font-medium items-center'>
               <span>{section?.createdBy?.userName}</span>
               <img className='h-5 w-5 rounded-full' src={section?.createdBy?.profilePhoto} alt="" />
             </div>
           </div>
        </div>
        }
        <ProjectSection/>
    </main>
  )
}

export default ProjectPage;