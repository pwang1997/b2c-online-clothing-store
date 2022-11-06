import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

export default function NavItemShopByCategory(props) {

    const {navigate} = props;

    const seasonalCategories = ["Spring", "Summer", "Fall", "Winter"];

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

            {
                seasonalCategories.map((category) => {
                    return (
                        <ListItem disablePadding key={category}>
                            <ListItemButton onClick={() => {
                                navigate("/products", {state: {category: category}, replace: true});
                            }}>
                                <ListItemText primary={`${category} Wear`}/>
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}