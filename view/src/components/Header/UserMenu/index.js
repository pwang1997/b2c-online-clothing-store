import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import {Menu, MenuItem} from "@mui/material";
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom';
import {AccountCircle} from "@mui/icons-material";

export default function UserMenu() {
    const mobileMenuId = 'userMenuMobile';
    const menuId = 'userMenu';

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const renderMobileMenu = (
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
            <MenuItem>
                <IconButton
                    component={Link}
                    to="/sign-in"
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                >
                    Sign In
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    component={Link} to="/sign-up"
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                >
                    Sign up
                </IconButton>
            </MenuItem>
        </Menu>
    );

    const renderMenu = (
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
            <MenuItem component={Link} to="/sign-in" onClick={handleMenuClose}>Sign In</MenuItem>
            <MenuItem component={Link} to="/sign-up" onClick={handleMenuClose}>Sign Up</MenuItem>
        </Menu>
    );

    return (
        <div className="userMenu">
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{display: {xs: 'none', md: 'flex'}}}
            >
                <AccountCircle/>
            </IconButton>

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
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};