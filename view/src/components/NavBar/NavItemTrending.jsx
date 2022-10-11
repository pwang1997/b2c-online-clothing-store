import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

export default function NavItemTrending(props) {

    const {navigate} = props;

    return (
        <List>
            <ListItemText
                primary="Trending"
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
                    navigate("/products?trending=true");
                }}>
                    <ListItemText primary={"Best Sellers"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate("/products?new-release=true");
                }}>
                    <ListItemText primary={"New Releases"}/>
                </ListItemButton>
            </ListItem>

        </List>
    );
}