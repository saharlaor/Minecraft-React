import { configureStore } from "@reduxjs/toolkit";
import ToolReducer from "./toolSlice"

const store = configureStore({
    reducer: {
        tool: ToolReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;
