import {useEffect, useState} from "react";

import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import {
    Button,
    Menu,
    MenuItem
} from "@mui/material";
import MoreIcon from '@mui/icons-material/MoreVert';
// import {UserContext} from "../../../App";
import UserLoginForm from "./UserLoginForm";

const UserLogin = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024 && window.innerHeight <= 1024);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const firebaseUserCollectionRef = useContext(UserContext);

    useEffect(() => {
        // toggle condition for displaying mobile version
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth <= 1024 && window.innerHeight <= 1024);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleModalPopup = (e) => {
        open ? handleClose() : handleOpen();
    };

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';

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
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleModalPopup}
                    color="inherit"
                >
                    Log in
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleModalPopup}
                    color="inherit"
                >
                    Sign up
                </IconButton>
            </MenuItem>
        </Menu>
    );

    const GuestUser = () => {
        return (
            <div className="guest">
                <Button
                    size="large"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleModalPopup}
                    color="inherit"
                    sx={{display: {xs: 'none', md: 'inline-block'}}}
                >
                    Log in
                </Button>

                <Button
                    size="large"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleModalPopup}
                    color="inherit"
                    sx={{display: {xs: 'none', md: 'inline-block'}}}
                >
                    Sign Up
                </Button>
            </div>
        );
    }

    return (
        <div className="userIcon">
            {isMobile ? null : <GuestUser/>}
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
            <UserLoginForm open={open} handleClose={handleClose}/>
        </div>
    );
};

export default UserLogin;
