import React, {Fragment, useEffect} from "react";
import Container from "@mui/material/Container";
import OrderDetailCard from "./OrderDetailCard";
import Typography from "@mui/material/Typography";
import {Card, CardContent} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";


const OrderDetail = (props) => {

    const {order} = props;
    const {products, paidAt, purchaseUnits} = order;

    useEffect(() => {
        console.log({
            products,
            paidAt,
            purchaseUnits
        });
    }, []);

    return (
        <Fragment>
            <Container>
                <Box m={2}>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14, display: "inline", float: "left"}}
                                        color="text.secondary" gutterBottom >
                                Order place at: {new Date(paidAt).toDateString()}
                            </Typography>
                            <Typography sx={{fontSize: 14, display: "inline", float: "right"}}
                                        color="text.secondary" gutterBottom >
                                Order id: {order.id}
                            </Typography>
                            <Typography variant={"text"} color={order.status === "COMPLETED" ? "green" : "yellow"}>
                                {order.status}
                            </Typography>
                            <Divider/>

                            {
                                Object.keys(products).map((pid) => {
                                        return <OrderDetailCard
                                            key={pid} paidAt={paidAt} pid={pid}
                                            orderedProduct={products[pid]}/>
                                    }
                                )
                            }
                        </CardContent>
                        <Typography
                            variant="text"
                            align='right'
                            className='animate__animated animate__fadeInUp'
                        >
                            <Box m={2} pt={1}>
                                Total: ${purchaseUnits.amount.value}
                            </Box>
                        </Typography>
                    </Card>
                </Box>
            </Container>
        </Fragment>
    );

}

export default OrderDetail;