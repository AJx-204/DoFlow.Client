import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:null,
    authLoading:null,
    errorMessage:null,
    resMessage:null,
}

const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{

    }
})

export default AuthSlice.reducer;