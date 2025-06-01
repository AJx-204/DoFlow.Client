import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Auth = ({children}) => {

  const user = useSelector((state)=>state.auth.user);

  if(!user){
    return <Navigate to="/auth/singUp" replace />
  }

  return (
    children
  )
}

export default Auth;