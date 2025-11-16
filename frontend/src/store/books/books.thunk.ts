import {createAsyncThunk} from "@reduxjs/toolkit";

const BOOKS_API_BASE = "/api/books"
const BOOKS_API_BASE_WITH_ID = "/api/books/{id}"

export const fetchBooks = createAsyncThunk(
    "books/fetchAll",
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(BOOKS_API_BASE);
            return await response.json();
        } catch (e) {
            console.error("Books fetching has been failed: ", e)
            return rejectWithValue(e)
        }
    }
)