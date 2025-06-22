import { createContext, useContext, useState } from "react";


const UIStateContext = createContext();


export const UIStateProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [membersShowInList, setMembersShowInList] = useState(true)

    const value = {

       isSidebarOpen,
       setIsSidebarOpen,

       membersShowInList,
       setMembersShowInList,

    }

    return (
        <UIStateContext.Provider value={value}>
           {children}
        </UIStateContext.Provider>
    )
};


export const useUIState = () => {
    return useContext(UIStateContext)
}