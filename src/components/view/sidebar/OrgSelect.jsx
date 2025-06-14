import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { ChevronDown, Plus } from 'lucide-react'
import { BlueBtn, useClickOutside } from '../../../global'
  
const OrgSelect = () => {

  const { user } = useSelector(state => state.auth)

  const [showOrgList, setShowOrgList] = useState(false);
  const orgListRef = useRef();
 
  useClickOutside(orgListRef, ()=>setShowOrgList(false))

  return (
    <div className='w-full p-1.5 border-b-2 border-zinc-500/10'>
        <div
         onClick={()=> setShowOrgList(true)} 
         className={`flex items-center justify-between gap-2 p-2 ${showOrgList ? "bg-zinc-500/20" : "hover:bg-zinc-500/20"} rounded-md w-[84%] overflow-hidden group smooth cursor-pointer`}>
          <div className='flex items-center gap-3 w-full overflow-hidden'>
            {user?.inOrg?.length > 0  ? (
             <>
              <div className='h-6.5 w-6.5 overflow-hidden rounded-md'>
               <img className='h-full w-full object-cover' src={user?.inOrg[0]?.org.orgProfilePhoto} alt="" />
              </div>
              <span className='font-semibold truncate overflow-hidden whitespace-nowrap'>{user?.inOrg[0]?.org.orgName}</span>
             </>
            )  : (
              <>
                <Plus className='mt-0.5 group-hover:text-blue-500' size={18}/>
                 <span className='text-sm truncate'>Create Organization</span>
              </>
            )}
           </div>
          <ChevronDown className={`opacity-0 ${showOrgList ? "opacity-100" : "group-hover:opacity-100"} smooth`} size={20}/>
        </div>
        {showOrgList && (
          <div ref={orgListRef} className='text-sm p-3 absolute border left-2 mt-1 bg-white dark:bg-zinc-950 shadow-md border-zinc-500/30 rounded-md'>
            <p className='text-xs font-medium text-zinc-500 mb-2'>select organization</p>
             {user?.inOrg?.length > 0 && (
                user.inOrg.map((org)=>(
                  <div key={org.org._id} className='p-2 w-[250px] rounded-md hover:bg-zinc-500/20 mt-1 flex items-center gap-3'>
                     <img src={org.org.orgProfilePhoto} alt={org.org.orgName} className='h-6 w-6 rounded-md ' />
                     <span className='truncate overflow-hidden whitespace-nowrap max-w-[200px]'>{org.org.orgName}</span>
                  </div>
                ))
              )}
              <div className='group p-2 w-[250px] rounded-md hover:bg-blue-500/20 hover:shadow opacity-50 hover:opacity-100 mt-1 flex gap-3 items-center '>
                 <Plus className='ml-1 group-hover:text-blue-500' size={19}/>
                  <span>Create New Organization</span>
              </div>
          </div>
        )}
    </div>
  )
}

export default OrgSelect;