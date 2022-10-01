import {useState} from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

const UserItem = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    // const [isLoggedIn, setIsLogedIn] = useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Login</p>
            </MenuItem>
        </Menu>
    );

    const IconBtnLogin = (props) => {
        const isLoggedIn = props.isLoggedIn;
        return(
            <IconButton
                size="medium"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                {isLoggedIn ? "Logout" : "Login"}
            </IconButton>
        );
    }

    const IconBtnUser = (props) => {
        const isLoggedIn = props.isLoggedIn;

        return(
            <IconButton
                size="medium"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                {isLoggedIn ? "Placeholder" : <AccountCircle />}
            </IconButton>
        );
    }

    return (
        <div className="userIcon">
            {/* {renderMobileMenu}
            {renderMenu}
            <Box sx={{display: {xs: "none", md: "flex"}}}>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
            </Box>
            <Box sx={{display: {xs: "flex", md: "none"}}}>
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
            </Box> */}

            {/*Todo: add mobile menu*/}
            <div className="userItemMenu">
                <IconBtnLogin isLoggedIn={true}/>
                <IconBtnUser isLoggedIn={true} />
            </div>

            <div className="userItemMenu">
                <IconBtnLogin isLoggedIn={false}/>
                <IconBtnUser isLoggedIn={false} />
            </div>
        </div>
    );
};

export default UserItem;
