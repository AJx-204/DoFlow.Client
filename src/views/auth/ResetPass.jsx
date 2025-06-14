import React from 'react'
import { useForm } from 'react-hook-form'
import { BlueBtn, Input, Logo } from '../../global'

const ResetPass = () => {

  const { register, handleSubmit, formState:{errors} } = useForm();

  const handleResetPassword = (data) => {
      console.log(data)
  };

  return (
    <div className='inter w-full h-screen flex items-center justify-center'>
        <div className='p-6 w-[330px] bg-white border dark:bg-zinc-950 flex flex-col gap-3 border-zinc-500/30 rounded-lg shadow-md'>
            <div className='flex items-center justify-center'>
               <Logo className='text-lg tracking-tight' />
            </div>
            <div className='flex flex-col items-center text-center gap-1'>
              <span className='text-xl font-semibold'>Reset Password</span>
              <span className='text-sm text-zinc-500'>
                Enter OTP and new Password to reset Password .
              </span>
            </div>
            <form
             onSubmit={handleSubmit(handleResetPassword)}
             className='flex flex-col gap-3 mt-2'>
               <Input
                className='flex flex-col gap-0.5'
                label='OTP' 
                labelClassName='text-xs font-medium ml-1'
                inputClassName='text-sm border border-zinc-500/20 bg-zinc-500/5 rounded-md p-2 placeholder:text-zinc-500/50 placeholder:text-sm focus:bg-blue-500/5 focus:border-blue-500/20'
                placeholder='Enter email here . . . '
                type='number'
                id='otp'
                required={true}
                {...register('otp', {
                  required: 'otp is required',
                })}
                />
                {errors.otp && 
                  <span className='text-red-500 text-xs m-1'>
                   {errors.otp.message}
                  </span>
                }
               <Input
                className='flex flex-col gap-0.5'
                label='New password' 
                labelClassName='text-xs font-medium ml-1'
                inputClassName='text-sm border border-zinc-500/20 bg-zinc-500/5 rounded-md p-2 placeholder:text-zinc-500/50 placeholder:text-sm focus:bg-blue-500/5 focus:border-blue-500/20'
                placeholder='Enter email here . . . '
                type='text'
                id='password'
                required={true}
                {...register('password', {
                  required: 'password is required',
                  minLength:{
                    value: 4,
                    message: 'Password must be at least 4 characters',
                  }
                })}
                />
                {errors.password && 
                  <span className='text-red-500 text-xs m-1'>
                   {errors.password.message}
                  </span>
                }
                 <div className='flex items-center justify-center mt-5'>
                   <BlueBtn className='apple' text='Change Password '/>
                 </div>
            </form>
        </div>
    </div>
  )
}

export default ResetPass;