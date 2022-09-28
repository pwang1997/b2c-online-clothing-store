/**
 * TODOs:
 *  1. NavBar
 *  2. SearchBar
 *  3. Login
 *  4. ShoppingCart
 */

import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {Link, MenuItem} from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import UserItem from "./UserItem/UserItem";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const links = [
    {name: "Home", url: "/"},
    {name: "Product", url: "/product"},
    {name: "Product Gallery", url: "/products"},
    {name: "ShoppingCart", url: "/cart"},
    {name: "Checkout", url: "/checkout"},
];

export default function Header() {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: {xs: "none", sm: "block"},
                        }}
                    >
                        Clothing Store
                    </Typography>

                    <SearchBar/>

                    <UserItem/>
                </Toolbar>
            </AppBar>


            {/* will be replaced with proper navbar */}
            <Toolbar
                component="nav"
                variant="dense"
                sx={{justifyContent: "center", overflowX: "auto"}}
            >
                {links.map((link, idx) => {
                    return (
                        <Link
                            color="inherit"
                            noWrap
                            key={idx}
                            variant="body1"
                            href={link.url}
                            sx={{p: 1, flexShrink: 0}}
                        >
                            {" "}
                            {link.name}
                        </Link>
                    );
                })}
            </Toolbar>
        </Box>
    );
}
