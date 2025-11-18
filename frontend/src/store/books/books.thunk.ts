import {createAsyncThunk} from "@reduxjs/toolkit";
import {BookModel} from "../../models/book.model";

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

export const deleteBookById = createAsyncThunk(
    "books/deleteBookById",
    async (id: number, {rejectWithValue}) => {
        try {
            const url = BOOKS_API_BASE_WITH_ID.replace("{id}", String(id));

            const response = await fetch(url, {
                method: "DELETE",
            });

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => null);
                return rejectWithValue(errorPayload ?? "Failed to delete book");
            }

            return id;
        } catch (e) {
            console.error("Error deleting book:", e);
            return rejectWithValue(e);
        }
    }
);

export const addNewBook = createAsyncThunk<
    BookModel,
    BookModel,
    { rejectValue: string }
>(
    "books/addNewBook",
    async (newBook, {rejectWithValue}) => {
        try {
            const response = await fetch(BOOKS_API_BASE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBook),
            });

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => null);
                return rejectWithValue(
                    errorPayload?.message ?? "Failed to add book"
                );
            }

            return (await response.json()) as BookModel;
        } catch (e) {
            console.error("Error adding book:", e);
            return rejectWithValue("Network or server error");
        }
    }
);
