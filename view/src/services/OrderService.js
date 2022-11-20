import {fetchOrderHistory, submitOrder} from "../apis/Orders";


export const submitOrderService = (firebaseContext, orderSummary) => {
    return submitOrder(firebaseContext, orderSummary);
}

export const fetchOrderHistoryService = (firebaseContext, uid) => {
    return fetchOrderHistory(firebaseContext, uid);
}