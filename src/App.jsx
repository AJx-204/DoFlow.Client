import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppLayout, Auth, AuthLayout, ThemeToggle } from './global';


const App = () => {

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
     <ThemeToggle/>
    </>
  )

}

export default App;