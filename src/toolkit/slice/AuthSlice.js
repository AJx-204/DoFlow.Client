import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:"Ashit",
}

const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
    }
})

export default AuthSlice.reducer;