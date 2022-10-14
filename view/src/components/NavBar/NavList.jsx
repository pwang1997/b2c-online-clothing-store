import Divider from "@mui/material/Divider";
import NavItemTrending from "./NavItemTrending";
import Settings from "./Settings";
import Box from "@mui/material/Box";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useState, Fragment} from "react";
import NavItemShopByCategory from "./NavItemShopByCategory";


export function NavList(props) {

    const {toggleDrawer, anchor} = props;

    const [cookie, setCookie, removeCookie] = useCookies(['user']);
    const userCookie = cookie['user'];
    const navigate = useNavigate();


    const NavItems = [
        <NavItemTrending navigate={navigate}/>,
        <NavItemShopByCategory navigate={navigate} />,
        <Settings userCookie={userCookie} removeCookie={removeCookie} navigate={navigate}/>
    ]

    return (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {
                NavItems.map((item, index) => (
                    <Fragment key={index}>
                        {item}
                        <Divider/>
                    </Fragment>
                ))
            }
        </Box>
    )
}