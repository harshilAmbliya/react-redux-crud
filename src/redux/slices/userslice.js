import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
            adduser: (state, action) => {
                state.push(action.payload);
            },
            deleteuser: (state, action) => {
               return state.filter(user => user.id !==action.payload)
            },
            updateuser: (state, action) => {
                state.splice(action.payload.index ,1,action.payload.user);
            },
        },
})

export const { adduser,deleteuser,updateuser } = userslice.actions;
export default userslice.reducer;
