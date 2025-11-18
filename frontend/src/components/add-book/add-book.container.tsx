import React, {FormEvent, useCallback} from 'react';
import Navbar from "../navbar/navbar.component";
import CleanBox from "../common/clean-box.component";
import {Box, Button, Stack, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/store.hook";
import {addNewBook} from "../../store/books/books.thunk";
import {BookModel} from "../../models/book.model";

const AddBookContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleFormSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get("title")?.toString()
        const author = formData.get("author")?.toString()
        const year = formData.get("year")?.toString()

        if (title && author && year) {
            const newBook: BookModel = {
                title,
                author,
                year: +year
            };
            await dispatch(addNewBook(newBook)).unwrap()
            navigate("/");
        }
    }, [dispatch, navigate])

    return (
        <CleanBox>
            <Navbar/>


            <Box margin="10px" maxWidth="500px" alignItems="center" justifyContent="center">
                <form onSubmit={handleFormSubmit}>

                    <Stack direction="column" gap="8px">

                        <TextField
                            required
                            id="title"
                            name="title"
                            label="Title"
                        />

                        <TextField
                            required
                            id="author"
                            name="author"
                            label="Author"
                        />

                        <TextField
                            required
                            id="year"
                            name="year"
                            label="Year"
                        />

                        <Button type="submit">Submit</Button>
                    </Stack>
                </form>
            </Box>

        </CleanBox>
    );
};

export default AddBookContainer;