import {BookModel} from "../../models/book.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchBooks} from "./books.thunk";

interface BooksSlice {
    books: BookModel[]
}

const initialState: BooksSlice = {
    books: []
}

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<BookModel[]>) => {
            if (action.payload) {
                state.books = action.payload;
            }
        })
    }
})

export default booksSlice.reducer