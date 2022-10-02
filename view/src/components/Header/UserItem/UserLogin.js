import {useEffect, useState} from "react";

import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Button, Menu, MenuItem, TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import MoreIcon from '@mui/icons-material/MoreVert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    minHeight: 500,
    bgcolor: 'background.paper',
    p: 4
};

const UserLogin = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024 && window.innerHeight <= 1024);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const ModalWebLogin = () => {
        return (
            <Modal
                aria-labelledby="web-modal-title"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Grid container spacing={2}>
                            <Grid item marginTop={6} xs={12} md={12}>
                                <Typography id="web-modal-title" variant="h6" component="h6" align={"center"}>
                                    Welcome to Clothing Store
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField id="email" label="Email" fullWidth required/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button variant="outlined" fullWidth>Log in</Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button variant="outlined" fullWidth>Sign up</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="outlined" fullWidth>Login with Google</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        );
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
            <ModalWebLogin/>
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
        </div>
    );
};

export default UserLogin;
