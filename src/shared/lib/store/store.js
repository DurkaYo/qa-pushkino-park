import {configureStore} from "@reduxjs/toolkit";
import viewModeRentersListReducer from './slices/viewModeRentersList';

export const store = configureStore({
    reducer: {
        viewModeRentersList: viewModeRentersListReducer,
    }
})
