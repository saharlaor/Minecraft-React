import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {BlockType} from "../components/Block/Block";

export type ToolType = "pickaxe" | "axe" | "shovel";

// Define a type for the slice state
interface IToolState {
    selectedTool: ToolType;
}

// Define the initial state using that type
const initialState: IToolState = {
    selectedTool: "shovel",
}

export const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTool: (state, action: PayloadAction<ToolType>) => {
            state.selectedTool = action.payload;
        },
    },
})

export const { setTool } = toolSlice.actions

export default toolSlice.reducer