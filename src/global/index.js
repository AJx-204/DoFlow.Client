// auth
import Auth from '../auth/Auth';
export {
  Auth,
}


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
         }
      //Inputs
         import { Input, FileInput, TextArea} from "../components";
         export {
           Input,
           FileInput,
           TextArea,
         }
      //Loader
         import { Loader, DotLoader, AppLoader } from "../components";
         export {
           Loader,
           DotLoader,
           AppLoader,
         }
      //Logo 
         import { Logo } from "../components";
         export {
           Logo,
         }
   //view
      //sidebar
         import { OrgSelect, ProfileIcon, } from "../components";
         export{
           OrgSelect,
           ProfileIcon,
         }
      //profile
         import { ProfilePopup } from "../components";  
         export {
          ProfilePopup,
         } 


// context
   //Notifier
      import { NotifierProvider, useNotifier } from "../context/Notifier/context/NotifierContext";
      import  NotifierList  from '../context/Notifier/NotifierList'
      export {
         NotifierProvider,
         useNotifier,
         NotifierList,
      }
import { UIStateProvider } from '../context/UIStateContext';
import { useUIState } from '../context/UIStateContext';
export {
  UIStateProvider,
  useUIState
}


// hooks 
   //auth
      import { useLogin, useGetUser, useLogout, useVerifyOtp, useResendOtp, useSingUp } from "../hooks";
      export {
        useLogin,
        useGetUser,
        useLogout,
        useVerifyOtp,
        useResendOtp,
        useSingUp,
      }


// layouts 
import AuthLayout from '../layouts/AuthLayout';
import AppLayout from '../layouts/AppLayout'
export {
  AuthLayout,
  AppLayout
}


// styles
   //Themes
      import { ThemeProvider } from '../styles/Themes/Theme';
      import { useTheme } from '../styles/Themes/Theme';
      export {
          ThemeProvider,
          useTheme,
      }


// toolkit
   //Slice
      import { setUser, setAuthLoading, logoutUser, setErrorMessage, setResMessage, setAppLoading } from "../toolkit/slice/authSlice";
      export {
        setUser,
        setAuthLoading,
        logoutUser,
        setErrorMessage, 
        setResMessage,
        setAppLoading,
      }
import store from '../toolkit/store'
export {
  store
}


// utils
import { useHotkey } from '../utils/ShortCuts';
import { useClickOutside } from '../utils/ClickOutSied'
export {
  useHotkey,
  useClickOutside,
}


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
      }
   //navigation
      import SideBar from '../views/navigation/SideBar';
      import TopBar from '../views/navigation/TopBar';
      export {
        SideBar,
        TopBar,
      }
   //pages
      import  ProfilePage  from "../views/pages/ProfilePage";  
      export {
        ProfilePage
      }


// temp 
import ThemeToggle from "../temp/ThemeToggle";
export { 
  ThemeToggle,
}