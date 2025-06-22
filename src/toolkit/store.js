import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import orgSlice from './slice/orgSlice';
import teamSlice from './slice/teamSlice'
import projectSlice from './slice/projectSlice'


const store = configureStore({
    reducer:{
        auth:authSlice,
        org:orgSlice,
        team:teamSlice,
        project:projectSlice,
    }
});

export default store;