import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isTitleScreenOpen: true,
};

export const titleScreenSlice = createSlice({
    name: 'titleScreen',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setIsTitleScreenOpen: (state, action: PayloadAction<boolean>) => {
            state.isTitleScreenOpen = action.payload;
        },
    },
})

export const { setIsTitleScreenOpen } = titleScreenSlice.actions

export default titleScreenSlice.reducer