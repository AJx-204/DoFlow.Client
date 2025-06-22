import { createContext, useState, useContext, useEffect } from 'react'
import { useOrg } from '@/global';
import { useSelector } from 'react-redux';

const OrgIdContext = createContext();

export const OrgIdProvider = ({children}) => {

    const { user } = useSelector(state => state.auth)

    const {  getOrg } = useOrg();
    const [ orgId, setOrgId ] = useState(localStorage.getItem('orgId') || null);

    const value = {
        orgId,
        setOrgId
    };

    useEffect(()=>{
        if (orgId) {
          getOrg(orgId);
          localStorage.setItem('orgId', orgId);
        } else if(user) {
          setOrgId(user?.inOrg[0]?.org._id)
          localStorage.setItem('orgId', orgId);
           
        }
    },[orgId])  

    return (
        <OrgIdContext.Provider value={value}>
            {children}
        </OrgIdContext.Provider>
    )

};

export function useOrgId(){
    return useContext(OrgIdContext)
}