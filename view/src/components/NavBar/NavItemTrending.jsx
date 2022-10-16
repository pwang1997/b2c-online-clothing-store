import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import {autumnList, springList, summerList, winterList} from "../../mock/product";

export default function NavItemTrending(props) {

    const {navigate} = props;
    const mockData = [
        ...springList,
        ...summerList,
        ...winterList,
        ...autumnList,
    ];

    const promotedProducts = mockData.reduce((products, product) => {
        if(product.id % 2 === 0) {
            product.promotionStatus = true;
            products.push(product);
        }
        return products;
    }, []);

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
                    navigate("/products", {state: promotedProducts, replace: true });
                }}>
                    <ListItemText primary={"Featuring"}/>
                </ListItemButton>
            </ListItem>

            {/*<ListItem disablePadding>*/}
            {/*    <ListItemButton onClick={() => {*/}
            {/*        navigate("/products?trending=true");*/}
            {/*    }}>*/}
            {/*        <ListItemText primary={"Best Sellers"}/>*/}
            {/*    </ListItemButton>*/}
            {/*</ListItem>*/}

            {/*<ListItem disablePadding>*/}
            {/*    <ListItemButton onClick={() => {*/}
            {/*        navigate("/products?new-release=true");*/}
            {/*    }}>*/}
            {/*        <ListItemText primary={"New Releases"}/>*/}
            {/*    </ListItemButton>*/}
            {/*</ListItem>*/}

        </List>
    );
}