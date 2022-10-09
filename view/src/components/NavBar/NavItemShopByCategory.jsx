import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import {getDocs, query, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useFirebaseProductCollection} from "../../context/FirebaseContext";
import {useCookies} from "react-cookie";
import {groupBy, mapValues, omit} from "lodash";

export default function NavItemShopByCategory(props) {

    const {navigate} = props;

    // const [cookie, setCookie] = useCookies(['category']);
    // const productCategoryCookie = cookie['category'];
    //
    // const [categoryList, setCategoryList] = useState([]);
    //
    //
    // const productCollection = useFirebaseProductCollection();

    // const initShopByCategory = () => {
    //     const fetchProductByCategory = async () => {
    //         return await getDocs(productCollection);
    //     };
    //
    //     fetchProductByCategory().then((res) => {
    //         const orderData = [];
    //         const orders = res.docs;
    //         orders.forEach(order => orderData.push(order.data()));
    //         let grouped = mapValues(groupBy(orderData, 'category'),
    //             clist => clist.map(car => omit(car, 'orderDate'))
    //         );
    //         console.log(grouped);
    //         setCookie('category', JSON.stringify(grouped), {
    //             path: '/',
    //             expires: new Date(Date.now() + 30 * 60 * 1000),
    //             httpOnly: false
    //         });
    //
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // }


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
                    navigate(`/products?category=jeans`);
                }}>
                    <ListItemText primary={"Jeans"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => {
                    navigate(`/products?category=sweater`);
                }}>
                    <ListItemText primary={"Sweaters"}/>
                </ListItemButton>
            </ListItem>

        </List>
    );
}