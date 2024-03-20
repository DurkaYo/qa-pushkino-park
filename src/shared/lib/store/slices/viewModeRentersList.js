import {createSlice} from "@reduxjs/toolkit";

const viewModeRentersListSlice = createSlice({
    name: 'viewModeRentersList',
    initialState: {
        value: 'tiles',
    },
    reducers: {
        changeViewMode: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {changeViewMode} = viewModeRentersListSlice.actions;
export default viewModeRentersListSlice.reducer;
