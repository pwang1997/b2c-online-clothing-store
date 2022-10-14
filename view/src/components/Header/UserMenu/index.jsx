import { Fragment } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import MobileUserMenu from './MobileUserMenu';
import WebUserMenu from './WebUserMenu';

export default function UserMenu() {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);
    const userCookie = cookie['user'];
    const navigate = useNavigate();

    return (
        <Fragment>
            <MobileUserMenu
                userCookie={userCookie}
                removeCookie={removeCookie}
                navigate={navigate}
            />

            <WebUserMenu
                userCookie={userCookie}
                removeCookie={removeCookie}
                navigate={navigate}
            />
        </Fragment>

    );
};