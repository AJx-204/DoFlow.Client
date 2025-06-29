import { setInvite } from '@/global';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Invite = () => {

    const { user } = useSelector(s => s.auth)

    const dispatch = useDispatch();

  return (
  <div className='p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
   {user?.invites?.length === 0 ? (
      <p className='h-full w-full mt-10 flex items-center justify-center italic text-sm'>
        No invitations !
      </p>
    ) :
   user?.invites?.map((invite) => {
    const org = invite.forOrg;
    const team = invite.forTeam;
    const invitedBy = invite.invitedBy;

    return (
      <Link onClick={()=>dispatch(setInvite(invite))} to={`/invite/accept/${invite._id}`} key={invite._id} className='flex flex-col w-full border border-zinc-500/20 rounded-md p-3 shadow cursor-pointer hover:shadow-md'>
        <div className='flex items-center gap-4'>
          <img
            src={org?.orgProfilePhoto || team?.teamProfilePhoto || '/default.png'}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className='font-semibold text-lg text-zinc-800 dark:text-zinc-100'>
              {org?.orgName || team?.teamName}
            </div>

            <div className='text-sm text-zinc-500'>
              Role: <span className='font-medium'>{invite.asRoleOf}</span>
            </div>
          </div>
        </div>
        <div className='mt-2 text-xs text-zinc-500'>
          Invited by : {invitedBy?.userName} - {invitedBy?.email}
        </div>
      </Link>
    );
  })}
</div>

  )
}

export default Invite;