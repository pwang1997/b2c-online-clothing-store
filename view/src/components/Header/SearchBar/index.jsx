import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

export default function SearchBar() {

    const [searchQuery, setSearchQuery] = useState();
    const navigate = useNavigate();

    const searchProduct = () => {
        ((!searchQuery) || (typeof searchQuery && searchQuery.trim().length === 0)) 
        ? navigate('/') 
        : navigate('/products',
            {
                state:
                {
                    productName: searchQuery
                },
                replace: true
            });
        setSearchQuery("");
    }

    return (
        <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Products"
                inputProps={{ 'aria-label': 'search products' }}
                onChange={(e) => { setSearchQuery(e.target.value) }}

            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
                onClick={() => { searchProduct() }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}