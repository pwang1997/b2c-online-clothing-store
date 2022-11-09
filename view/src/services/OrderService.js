import {submitOrder} from "../apis/Orders";


export const submitOrderService = (firebaseContext, orderSummary) => {
    return submitOrder(firebaseContext, orderSummary);
}