import {MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import {AccountCircle} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HistoryIcon from '@mui/icons-material/History';
import {useContext} from "react";
import {CartContext} from "../../../context/CartContext";

export const MenuItemSignUp = (props) => {
    const {handleMenuClose, navigate} = props;

    return (<MenuItem component={Link} to="/sign-up" onClick={() => {
            handleMenuClose();
        }}>
            <PersonAddIcon onClick={() => navigate("/sign-up")}/>
            Sign Up</MenuItem>)
}

export const MenuItemOrderHistory = (props) => {
    const {handleMenuClose, navigate} = props;

    return (<MenuItem component={Link} to="/history" onClick={() => {
            handleMenuClose();
        }}>
            <HistoryIcon onClick={() => navigate("/history")}/>
            Order History</MenuItem>)
}

export const MenuItemSignOut = (props) => {
    const {handleMenuClose, navigate, removeCookie} = props;
    return (<MenuItem component={Link} to="/" onClick={() => {
            handleMenuClose();
            removeCookie('user');
            removeCookie('shoppingCart');
            navigate("/");
        }}>
            <LogoutIcon/>
            Sign Out
        </MenuItem>)
}


export const MenuItemSignIn = (props) => {
    const {handleMenuClose, navigate} = props;

    return (<MenuItem component={Link} to="/sign-in" onClick={() => {
            handleMenuClose();
        }}>
            <LoginIcon onClick={() => navigate("/sign-in")}/>
            Sign In</MenuItem>);
};

export const MenuItemProfile = (props) => {
    const {handleMenuClose, navigate} = props;

    return (<MenuItem component={Link} to="/profile" onClick={() => {
            handleMenuClose();
        }}>
            <AccountCircle onClick={() => navigate("/profile")}/>
            Profile
        </MenuItem>)
};

export const MenuItemShoppingCart = (props) => {
    const {handleMenuClose, navigate} = props;
    const {amountOfItemsInCart} = useContext(CartContext);
    return (<MenuItem component={Link} to="/cart" onClick={() => {
            handleMenuClose();
        }}>
            <Badge badgeContent={amountOfItemsInCart()} color="error">
                <ShoppingCartIcon onClick={() => {
                    navigate("/cart")
                }}/>
            </Badge>
            Shopping Cart
        </MenuItem>)
};