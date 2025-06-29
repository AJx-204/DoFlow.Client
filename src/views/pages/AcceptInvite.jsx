import { Btn, formatDate, setInvite, useOrg } from '@/global';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AcceptInvite = () => {

    const { invite, inviteErrorMessage, inviteLoading } = useSelector(state => state.invite)

    const naviget = useNavigate();

    const { acceptInviteForOrg, declineInviteForOrg } = useOrg();

    const dispatch = useDispatch();

    const org = invite?.forOrg;
    const team = invite?.forTeam;
    const invitedBy = invite?.invitedBy;

   useEffect(()=>{
     if(!invite){
      naviget('/invite')
    }
   },[]);

   const handleAcceptInvitation = async () => {
      const success = await acceptInviteForOrg(invite._id)
      if(success){
        naviget('/invite')
      }
   }

   const handleDeclinInvitation = async () => {
     const success = await declineInviteForOrg(invite._id)
     if(success){
      naviget('/invite')
     }
   }

  return (
    <div className='p-4 flex items-center justify-center'>
       <div className='p-6 flex flex-col gap-4 '>
           <img
            src={org?.orgProfilePhoto || team?.teamProfilePhoto || '/default.png'}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className='font-semibold text-lg text-zinc-800 dark:text-zinc-100'>
            {org?.orgName || team?.teamName}
          </div>
          <div className='text-sm'>
            Role : <span className='font-medium'>{invite?.asRoleOf}</span>
          </div>
          <div className='text-xs text-gray-500'>
             Invited At : <span>{formatDate(invite?.createdAt)}</span>
          </div>
          <div className='flex gap-4'>
             <span className='text-sm font-medium'>Invited By :</span>
             <div className='flex flex-col gap-2 text-sm'>
                <img className='h-7 w-7 rounded-full' src={invite?.invitedBy.profilePhoto} />
                <span>Name : {invite?.invitedBy.userName}</span>
                <span>Email : {invite?.invitedBy.email}</span>
             </div>
          </div>
          {inviteErrorMessage && (
            <span className='text-sm text-red-500'>{inviteErrorMessage}</span>
          )}
          <div className='flex gap-5 mt-4'>
             <Btn isloading={inviteLoading} onClick={handleDeclinInvitation} text='Decline'/>
             <Btn isloading={inviteLoading} onClick={handleAcceptInvitation} className='text-sm px-4 py-2 rounded-lg text-green-500 hover:bg-green-500/20 bg-zinc-500/10' text='Aceept'/>
          </div>
       </div>
    </div>
  )
}

export default AcceptInvite;