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
                    navigate("/products", {state: {promotionStatus : true}, replace: true });
                }}>
                    <ListItemText primary={"Featuring"}/>
                </ListItemButton>
            </ListItem>

        </List>
    );
}