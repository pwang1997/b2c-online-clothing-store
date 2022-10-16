import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import {autumnList, springList, summerList, winterList} from "../../mock/product";

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
                    navigate("/products", {state: [...springList], replace: true });
                }}>
                    <ListItemText primary={"Spring Wear"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate("/products", {state: [...summerList], replace: true });
                }}>
                    <ListItemText primary={"Summer Wear"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate("/products", {state: [...autumnList], replace: true });
                }}>
                    <ListItemText primary={"Autumn Wear"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate("/products", {state: [...winterList], replace: true });
                }}>
                    <ListItemText primary={"Winter Wear"}/>
                </ListItemButton>
            </ListItem>

        </List>
    );
}