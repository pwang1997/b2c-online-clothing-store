import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

export default function SearchBar() {

    const searchQuery = useRef("");
    const navigate = useNavigate();

    const searchProduct = () => {
        let query = searchQuery.current.value;
        navigate("/products", {state: {query: query}, replace: true});
        searchQuery.current.value = "";
    }

    return (
        <Paper
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto'}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search Products"
                inputProps={{'aria-label': 'search products'}}
                inputRef={searchQuery}
            />
            <IconButton type="button" sx={{p: '10px'}} aria-label="search"
                        onClick={() => {
                            searchProduct()
                        }}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}