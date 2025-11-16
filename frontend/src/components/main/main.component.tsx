import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/store.hook";
import Navbar from "../navbar/navbar.component";
import {fetchBooks} from "../../store/books/books.thunk";
import {Box, styled} from '@mui/material';

const CleanBox = styled(Box)(() => ({
    padding: 0,
    margin: 0,
}));

const Main = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);


    return (
        <CleanBox>
            <Navbar/>
            Main Component
        </CleanBox>
    );
};

export default Main;