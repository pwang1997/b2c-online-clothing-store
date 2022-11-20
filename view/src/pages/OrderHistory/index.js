import {useEffect, useState} from "react";
import {useFirebaseOrderCollectionContext} from "../../context/FirebaseContext";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import {fetchOrderHistoryService} from "../../services/OrderService";
import {useCookies} from "react-cookie";
import OrderDetail from "../../components/OrderDetail";
import Divider from "@mui/material/Divider";


const OrderHistory = () => {

    const [cookies, setCookie] = useCookies(['user']);
    const userCookie = cookies['user'];

    const orderCtx = useFirebaseOrderCollectionContext();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let results = [];
        fetchOrderHistoryService(orderCtx, userCookie.uid)
            .then((res) => {
                res.docs.forEach((doc) => {
                    const data = {
                        id: doc.id,
                        ...doc.data()
                    }
                    results.push(data);
                })
            })
            .catch(console.error)
            .finally(() => setOrders(results));
    }, []);

    return (
        <Container>
            <Typography>
                Order History
            </Typography>

            <Divider />

            {
                orders && orders?.map((order) => {
                    return <OrderDetail key={order.id} order={order}/>
                })
            }

        </Container>
    );
}

export default OrderHistory;