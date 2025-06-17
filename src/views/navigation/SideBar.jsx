import React, { useEffect, useRef } from 'react'
import { useHotkey, useUIState, InfoIcon, useLogout, OrgSelect, IconBtn, ProfileIcon } from '../../global';
import { PanelLeftClose, PanelLeftOpen, } from 'lucide-react'
import { useSelector } from 'react-redux';

const SideBar = () => {

  const {isSidebarOpen, setIsSidebarOpen} = useUIState();
  const sidebarRef = useRef();
  
  const { user } = useSelector(state => state.auth)

  useHotkey('shift+s', ()=>setIsSidebarOpen(prev => !prev))

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true)
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className='h-[56px] border-b-2 border-zinc-500/10 bg-zinc-200 dark:bg-[#1c1c1c] flex items-center smooth'>
     <InfoIcon
      onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
      icon={isSidebarOpen ? <PanelLeftClose strokeWidth={1.5} size={22}/>: <PanelLeftOpen strokeWidth={1.5} size={22}/>}
      className={`z-100 absolute p-1.5 ${isSidebarOpen ? "ml-50" : "ml-1.5"} opacity-50 rounded h-[max-content] hover:bg-zinc-500/20 hover:opacity-100 smooth`}
      position='left-9'
      info='shift + s'
     />
    </div>
    
     <div ref={sidebarRef} className={`fixed top-0 left-0 h-screen w-60 bg-zinc-200 dark:bg-[#1c1c1c] border-r-2 border-zinc-500/10
       ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full opacity-0'} 
       smooth`}
      >
       <div className="flex flex-col h-full justify-between">
         {user && <OrgSelect/>}
         <div className="flex-1 overflow-y-auto hide-scrollbar">
           {/*menu*/}
         </div>
         {user && <ProfileIcon/>}
       </div>
     </div>
    </>
  )
}

export default SideBar;