import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppLoader } from '../components';

const Auth = ({children}) => {

  const { user, authLoading } = useSelector((state)=>state.auth);

  if(!user){
    return <Navigate to="/auth/singUp" replace />
  }

  if(authLoading){
    return (
      <div className='flex items-center justify-center w-full h-screen bg-zinc-50 dark:bg-zinc-900'>
        <AppLoader className='text-xl'/>
      </div>
    )
  }

  return (
    children
  )
}

export default Auth;