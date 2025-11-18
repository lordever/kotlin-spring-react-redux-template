import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import React, {FC, memo} from 'react';
import {BookModel} from "../../../models/book.model";
import DeleteIcon from '@mui/icons-material/Delete';

type BooksTableProps = {
    books: BookModel[];
    deleteBookById: (id: number) => void;
}

const BooksTable: FC<BooksTableProps> = ({books, deleteBookById}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Author</TableCell>
                        <TableCell align="left">Year</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book) => (
                        <TableRow
                            key={book.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left">{book.id}</TableCell>
                            <TableCell align="left">{book.title}</TableCell>
                            <TableCell align="left">{book.author}</TableCell>
                            <TableCell align="left">{book.year}</TableCell>
                            <TableCell align="left">
                                <IconButton aria-label="delete"
                                            onClick={() => deleteBookById(book.id!)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default memo(BooksTable);