import {Fragment, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {Menu} from "@mui/material";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";

import {
    MenuItemOrderHistory,
    MenuItemProfile,
    MenuItemShoppingCart,
    MenuItemSignIn,
    MenuItemSignOut,
    MenuItemSignUp
} from './MenuItems';

export default function UserMenu(props) {
    const {userCookie, navigate, removeCookie} = props;

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = 'userMenuMobile';

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return (
        <Fragment>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon/>
                </IconButton>
            </Box>
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                {
                    (!userCookie)
                        ? <MenuItemSignIn handleMenuClose={handleMobileMenuClose} navigate={navigate}/>
                        : <MenuItemProfile handleMenuClose={handleMobileMenuClose} navigate={navigate}/>
                }

                {
                    (!userCookie)
                        ? <MenuItemSignUp handleMenuClose={handleMobileMenuClose} navigate={navigate}/>
                        : <MenuItemOrderHistory handleMenuClose={handleMobileMenuClose} navigate={navigate}/>
                }

                {
                    (userCookie) &&
                    <MenuItemShoppingCart handleMenuClose={handleMobileMenuClose} navigate={navigate}/>
                }

                {
                    (userCookie) &&
                    <MenuItemSignOut handleMenuClose={handleMobileMenuClose} navigate={navigate}
                                     removeCookie={removeCookie}/>
                }

            </Menu>
        </Fragment>
    );
}

