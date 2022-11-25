import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Mauricio Bo"})
            state.push({name:"John Wells"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;