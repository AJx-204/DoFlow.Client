// auth
import Auth from '../auth/Auth';
export {
  Auth,
};


// components
   //ui
      //Buttons
         import { BlueBtn, Btn, FlatIcon, IconBtn, InfoIcon} from '../components';
         export {
           BlueBtn,
           Btn,
           IconBtn,
           FlatIcon,
           InfoIcon,
         };
      //Inputs
         import { Input, FileInput, TextArea} from "../components";
         export {
           Input,
           FileInput,
           TextArea,
         };
      //Loader
         import { Loader, DotLoader, AppLoader } from "../components";
         export {
           Loader,
           DotLoader,
           AppLoader,
         };
      //Logo 
         import { Logo } from "../components";
         export {
           Logo,
         };
   //view
      //membersList
        import { AvatarGroup } from '../components';
        export {
          AvatarGroup,
        }
      //profile
         import { ProfilePopup, UpdateUser } from "../components";  
         export {
          ProfilePopup,
          UpdateUser,
         } ;
      //sidebar
         import { OrgSelect, ProfileIcon, TeamMenu, ProjectMenu } from "../components";
         export{
           OrgSelect,
           ProfileIcon,
           TeamMenu,
           ProjectMenu,
         };
      

// context
   //Notifier
      import { NotifierProvider, useNotifier } from "../context/Notifier/context/NotifierContext";
      import  NotifierList  from '../context/Notifier/NotifierList'
      
      export {
         NotifierProvider,
         useNotifier,
         NotifierList,
      };
import { UIStateProvider } from '../context/UIStateContext';
import { useUIState } from '../context/UIStateContext';
import { useOrgId } from '../context/OrgIdContext'
export {
  UIStateProvider,
  useUIState,
  useOrgId,
};


// hooks 
   //auth
      import { useOrg, useLogin, useGetUser, useLogout, useVerifyOtp, useResendOtp, useSingUp, useGetResetPassOtp, useResetPassword, useUpadteUser } from "../hooks";
      export {
        useLogin,
        useGetUser,
        useLogout,
        useVerifyOtp,
        useResendOtp,
        useSingUp,
        useGetResetPassOtp,
        useResetPassword,
        useUpadteUser,
        useOrg,
      };


// layouts 
import AuthLayout from '../layouts/AuthLayout';
import AppLayout from '../layouts/AppLayout'
export {
  AuthLayout,
  AppLayout
};


// styles
   //Themes
      import { ThemeProvider } from '../styles/Themes/Theme';
      import { useTheme } from '../styles/Themes/Theme';
      export {
          ThemeProvider,
          useTheme,
      };


// toolkit
   //Slice
      //authSlice
        import { setUser, setAuthLoading, logoutUser, setErrorMessage, setResMessage, setAppLoading, updateUserProfile, } from "../toolkit/slice/authSlice";
        export {
          setUser,
          setAuthLoading,
          logoutUser,
          setErrorMessage, 
          setResMessage,
          setAppLoading,
          updateUserProfile,
        };
      //orgSlice
        import { setOrg, setOrgLoading, setOrgErrorMessage, setOrgResMessage } from "../toolkit/slice/orgSlice";
        export {
          setOrg,
          setOrgLoading,
          setOrgErrorMessage,
          setOrgResMessage,
        };
      //teamSlice
        import { setTeam } from '@/toolkit/slice/teamSlice';
        export {
          setTeam,
        };
      //projectSlice
        import { setProject } from "@/toolkit/slice/projectSlice";
        export {
          setProject,
        };
import store from '../toolkit/store'
export {
  store
};


// utils
import { useHotkey } from '../utils/ShortCuts';
import { useClickOutside } from '../utils/ClickOutSied'
import { GetRoleColor } from '../utils/GetRoleColor'
import { formatDate } from '../utils/formatDate'
export {
  useHotkey,
  useClickOutside,
  GetRoleColor,
  formatDate,
};


// views
   //auth-page
      import SingUp from '../views/auth/SingUp';
      import Login from '../views/auth/Login';
      import Otp from '../views/auth/Otp';
      import GetResetOtp from '../views/auth/GetResetOtp';
      import ResetPass from '../views/auth/ResetPass';
      export {
        SingUp,
        Login,
        Otp,
        GetResetOtp,
        ResetPass,
      };
   //navigation
      import SideBar from '../views/navigation/SideBar';
      import TopBar from '../views/navigation/TopBar';
      export {
        SideBar,
        TopBar,
      };
   //pages
      import  ProfilePage  from "../views/pages/ProfilePage"; 
      import OrgMemberPage from '@/views/pages/OrgMemberPage'; 
      import TeamMemberPage from '@/views/pages/TeamMemberPage';
      import ProjectPage from '@/views/pages/ProjectPage';
      export {
        ProfilePage,
        OrgMemberPage,
        TeamMemberPage,
        ProjectPage,
      };


// temp 
import ThemeToggle from "../temp/ThemeToggle";
export { 
  ThemeToggle,
};