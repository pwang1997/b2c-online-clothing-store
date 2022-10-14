import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import {Link} from "@mui/material";

export default function Admin(props) {

    const links = [
        {name: "Add Product", url: "/admin/add-product"},
        {name: "Find All Products", url: "/admin/find-all"},
    ];

    return (
        <Toolbar
                component="nav"
                variant="dense"
                sx={{justifyContent: "center", overflowX: "auto"}}
            >
                {links.map((link, idx) => {
                    return (
                        <Link
                            color="inherit"
                            noWrap
                            key={idx}
                            variant="body1"
                            href={link.url}
                            sx={{p: 1, flexShrink: 0}}
                        >
                            {" "}
                            {link.name}
                        </Link>
                    );
                })}
            </Toolbar>
    );
};