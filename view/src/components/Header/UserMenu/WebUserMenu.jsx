import {Menu} from "@mui/material";
import {useState, Fragment, useContext} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {AccountCircle} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {MenuItemOrderHistory, MenuItemProfile, MenuItemSignIn, MenuItemSignOut, MenuItemSignUp} from "./MenuItems";
import {CartContext} from "../../../context/CartContext";

function stringAvatar(name) {
    return {
        sx: {
            backgroundColor: "#212121",
            color: "#ff9100",
            width: 35,
            height: 35
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export default function WebUserMenu(props) {
    const {userCookie, navigate, removeCookie} = props;
    const {amountOfItemsInCart} = useContext(CartContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const menuId = 'userMenu';

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return(
        <Fragment>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    {
                        (!userCookie)
                            ? <AccountCircle />
                            : <Avatar {...stringAvatar(userCookie.username)} />
                    }
                </IconButton>

                {
                    // Display User Menu if user logged in
                    (userCookie) &&
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="cart"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Badge badgeContent={amountOfItemsInCart()} color="error">
                            <ShoppingCartIcon onClick={() => {
                                props.navigate("/cart") }} />
                        </Badge>
                    </IconButton>
                }
            </Box>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                {
                    (!userCookie)
                        ? <MenuItemSignIn handleMenuClose={handleMenuClose} navigate={navigate}/>
                        : <MenuItemProfile handleMenuClose={handleMenuClose} navigate={navigate}/>
                }

                {
                    (!userCookie)
                        ? <MenuItemSignUp handleMenuClose={handleMenuClose} navigate={navigate}/>
                        : <MenuItemOrderHistory handleMenuClose={handleMenuClose} navigate={navigate}/>
                }

                {
                    (userCookie) &&
                    <MenuItemSignOut handleMenuClose={handleMenuClose} navigate={navigate} removeCookie={removeCookie}/>
                }

            </Menu>
        </Fragment>
    )
}