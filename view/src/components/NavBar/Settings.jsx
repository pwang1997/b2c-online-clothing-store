import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

export default function Settings(props) {

    const {userCookie, removeCookie, navigate} = props;

    return (
        <List>
            <ListItemText
                primary="Helps & Settings"
                primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'large',
                    lineHeight: '20px',
                    ml: '15px',
                    mb: '10px'
                }}
            />

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    (userCookie) ? navigate("/profile") : navigate("/sign-in");
                }}>
                    <ListItemText primary={"Your Account"}/>
                </ListItemButton>
            </ListItem>

            {
                (userCookie) &&
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        removeCookie('user');
                        navigate("/");
                    }}>
                        <ListItemText primary={"Sign Out"}/>
                    </ListItemButton>
                </ListItem>
            }

        </List>
    );
}