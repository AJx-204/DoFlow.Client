import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppLayout, Auth, AuthLayout, ThemeToggle } from './global';
import { useSelector } from 'react-redux';


const App = () => {

  const user = useSelector((state)=>state.Auth.user)
  console.log(user)

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

    {/* temp component for the style check */}
     <ThemeToggle/>
    </>
  )

}

export default App;