import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

export default function NavItemShopByCategory(props) {

    const {navigate} = props;

    return (
        <List>
            <ListItemText
                primary="Shop By Category"
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
                    navigate("/products", {state: {category: "jeans"}, replace: true });
                }}>
                    <ListItemText primary={"Jeans"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate("/products", {state: {category: "sweater"}, replace: true });
                }}>
                    <ListItemText primary={"Sweaters"}/>
                </ListItemButton>
            </ListItem>

        </List>
    );
}