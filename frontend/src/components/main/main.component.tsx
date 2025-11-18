import React, {useCallback, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/store.hook";
import Navbar from "../navbar/navbar.component";
import {deleteBookById, fetchBooks} from "../../store/books/books.thunk";
import CleanBox from "../common/clean-box.component";
import BooksTable from "./books-table/books-table.component";
import {useSelector} from "react-redux";
import {getBooks} from "../../store/books/books.selector";

const Main = () => {

    const dispatch = useAppDispatch();
    const books = useSelector(getBooks);

    useEffect(() => {
        if (!books.length) {
            dispatch(fetchBooks())
        }
    }, [dispatch, books]);

    const handleDeleteBookById = useCallback((id: number) => {
        dispatch(deleteBookById(id))
    }, [dispatch])

    return (
        <CleanBox>
            <Navbar/>
            {books.length && <BooksTable books={books} deleteBookById={handleDeleteBookById}/>}
        </CleanBox>
    );
};

export default Main;