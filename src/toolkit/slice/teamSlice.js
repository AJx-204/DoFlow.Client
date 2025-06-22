import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    team:null,
}

const teamSlice = createSlice({
    name:'team',
    initialState,
    reducers:{
        setTeam: (state, action) =>{
            state.team = action.payload
        },
    }
});

export const { setTeam } = teamSlice.actions;

export default teamSlice.reducer;