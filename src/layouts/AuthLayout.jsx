import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { SingUp, Login, Otp, GetResetOtp, ResetPass } from '../global';


const AuthLayout = () => {

  return (
    <>
      <main className='w-full min-h-scree bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'>
          <Routes>
              <Route path='singUp' element={<SingUp/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='verifyOTP' element={<Otp/>}/>
              <Route path='getResetOtp' element={<GetResetOtp/>}/>
              <Route path='setNewPassword' element={<ResetPass/>}/>
          </Routes>
      </main>
    </>
  )
}

export default AuthLayout;