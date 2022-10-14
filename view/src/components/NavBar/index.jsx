import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Fragment, useState} from "react";
import {NavList} from "./NavList";

export default function NavBar() {
    const [anchor, setAnchor] = useState(false);


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setAnchor(!anchor);
    };

    return (
        <div>
            <Fragment>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(anchor, true)}
                >
                    <MenuIcon/>
                </IconButton>
                <Drawer
                    anchor={"left"}
                    open={anchor}
                    onClose={toggleDrawer(anchor, false)}
                >
                    <NavList
                        anchor={"left"}
                        toggleDrawer={toggleDrawer}
                    />

                </Drawer>
            </Fragment>
        </div>
    );
}
