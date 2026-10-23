import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BooksState = {
    votes: Record<string, number>;
};

const initialState: BooksState = {
    votes: {},
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addVote: (state, action: PayloadAction<string>) => {
            if (state.votes[action.payload] !== null && state.votes[action.payload] !== undefined) {
                state.votes[action.payload] += 1
            } else {
                state.votes[action.payload] = 1;
            }
        }
    },
})

export const booksReducer = booksSlice.reducer;
export const { addVote } = booksSlice.actions;