import React from 'react'
import { OrgMemberPage, ProfilePage, SideBar, TeamMemberPage, TopBar, useUIState, ProjectPage } from '@/global'
import { Route, Routes } from 'react-router-dom';

const AppLayout = () => {

  const { isSidebarOpen } = useUIState();

  return (
    <>
      <main className='flex w-full min-h-screen bg-zinc-50 text-zinc-800 dark:bg-[#212121] dark:text-zinc-200 smooth'>
         <div className={`flex fixed left-0 top-0 z-90`}>
           <SideBar />
           <TopBar/>
         </div>
         <div className={`${isSidebarOpen ? "md:ml-62" : ""} smooth mt-[57px] w-full`}>
            <Routes>
               <Route path='/profile/:user' element={<ProfilePage/>}/>
               <Route path='/:orgName/Members' element={<OrgMemberPage/>}/>
               <Route path ='/:orgName/:teamName/:teamId/team-members' element={<TeamMemberPage/>}/>
               <Route path ='/:orgName/:projectName/:projectId/project' element={<ProjectPage/>}/>
            </Routes>
         </div>
      </main>
    </>

  )
}

export default AppLayout;