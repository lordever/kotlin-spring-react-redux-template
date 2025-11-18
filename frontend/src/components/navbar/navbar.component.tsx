import {AppBar, Box, Link, MenuItem, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {ROUTES} from "../../constants/routes.constant";

const pages = {
    'main': {path: ROUTES.main, name: 'Main'},
    'add-book': {path: ROUTES.addBook, name: 'Add Book'},
}

const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {Object.entries(pages).map(([key, page]) => (
                        <Link component={RouterLink} to={page.path}>
                            <MenuItem key={key}>
                                <Typography sx={{textAlign: 'center'}}>{page.name}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;