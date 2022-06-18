import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ToolType = "pickaxe" | "axe" | "shovel";

// Define a type for the slice state
interface IToolState {
    tool: ToolType;
}

// Define the initial state using that type
const initialState: IToolState = {
    tool: "shovel",
}

export const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTool: (state, action: PayloadAction<ToolType>) => {
            state.tool = action.payload;
        },
    },
})

export const { setTool } = toolSlice.actions

export default toolSlice.reducer