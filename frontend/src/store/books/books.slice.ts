import {BookModel} from "../../models/book.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addNewBook, deleteBookById, fetchBooks} from "./books.thunk";

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
        builder.addCase(deleteBookById.fulfilled, (state, action: PayloadAction<number>) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        })
        builder.addCase(addNewBook.fulfilled, (state, action: PayloadAction<BookModel>) => {
            state.books.push(action.payload);
        })
    }
})

export default booksSlice.reducer