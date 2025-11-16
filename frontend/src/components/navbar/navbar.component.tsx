import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to="/">
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;