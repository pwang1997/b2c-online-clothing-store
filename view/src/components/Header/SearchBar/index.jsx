import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import {autumnList, springList, summerList, winterList} from "../../../mock/product";

export default function SearchBar() {

    const searchQuery = useRef("");
    const navigate = useNavigate();

    const mockData = [
        ...springList,
        ...summerList,
        ...winterList,
        ...autumnList,
    ];

    const promotedProducts = mockData.reduce((products, product) => {
        if(product.id % 2 === 0) {
            product.promotionStatus = true;
            products.push(product);
        }
        return products;
    }, []);

    const searchProduct = () => {
        let query = searchQuery.current.value;

        if ((!query) || (typeof query && query.trim().length === 0)) {
            navigate('/');
        } else if (query === "feature") {
            navigate("/products", {state: promotedProducts, replace: true });
        } else if(query === "spring") {
            navigate('/products', {state: [...springList], replace: true})
        } else if(query === "summer") {
            navigate('/products', {state: [...summerList], replace: true})
        } else if(query === "autumn" || query === "fall") {
            navigate('/products', {state: [...autumnList], replace: true})
        } else if(query === "winter") {
            navigate('/products', {state: [...winterList], replace: true})
        }
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