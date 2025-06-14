import React from 'react'
import { ProfilePage, SideBar, TopBar, useUIState } from '../global'
import { Route, Routes } from 'react-router-dom';

const AppLayout = () => {

  const { isSidebarOpen } = useUIState();

  return (
    <>
      <main className='flex w-full min-h-screen bg-zinc-100 text-zinc-800 dark:bg-[#212121] dark:text-zinc-200 smooth'>
         <div className={`flex fixed left-0 top-0 z-90`}>
           <SideBar />
           <TopBar/>
         </div>
         <div className={`${isSidebarOpen ? "md:ml-60" : ""} smooth mt-[57px]`}>
            <Routes>
               <Route path='/profile/:user' element={<ProfilePage/>}/>
            </Routes>
         </div>
      </main>
    </>

  )
}

export default AppLayout;