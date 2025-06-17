import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppLayout, AppLoader, Auth, AuthLayout, NotifierList, ThemeToggle, useGetUser } from './global';
import { useSelector } from 'react-redux';


const App = () => {

  const getUser = useGetUser();

  const navigate = useNavigate();

  const { user , appLoading } = useSelector(state => state.auth)

  useEffect(() => {
    const fetchUser = async () => {
      const success = await getUser();
      if(success){
        navigate(`/profile/${success}`)
      }
    };
    fetchUser();
  }, []);

  if(appLoading){
    return (
      <div className='flex items-center justify-center w-full h-screen bg-zinc-50 dark:bg-zinc-900'>
        <AppLoader className='text-xl'/>
      </div>
    )
  }

  return (
    <>
     <Routes>
       <Route
         path='/auth/*'
         element={<AuthLayout/>}
        />
        <Route
          path='*'
          element={
            <Auth>
              <AppLayout/>
            </Auth>
          }
        />
     </Routes>
     <NotifierList className='right-5 top-5'/>
    </>
  )

}

export default App;