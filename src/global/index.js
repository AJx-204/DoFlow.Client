// auth
import Auth from '../auth/Auth';
export {
    Auth,
}


// components
   //Buttons
      import { BlueBtn, IconBtn, } from '../components';
      export {
        BlueBtn,
        IconBtn,
        Loader,
      }
   //Loader
      import { Loader } from "../components";
      export{
        Loader
      }



// hooks 


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
import store from '../toolkit/store'
export {
    store
}


// utils


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


// temp 
import ThemeToggle from "../temp/ThemeToggle";
export { 
    ThemeToggle,
}