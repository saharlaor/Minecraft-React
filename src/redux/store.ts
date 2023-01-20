import { configureStore } from "@reduxjs/toolkit";
import ToolReducer from "./toolSlice";
import TitleScreenReducer from "./titleScreenSlice";

const store = configureStore({
    reducer: {
        tool: ToolReducer,
        titleScreen: TitleScreenReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;
