import {fetchShoppingCartByUserId, instantiateShoppingCart} from "../apis/ShoppingCarts";


export const fetchShoppingCartByUserIdService = async (firebaseContext, uid) => {
    return await fetchShoppingCartByUserId(firebaseContext, uid)
        .then((res) => {
            if (res.empty) {
                return instantiateShoppingCart(firebaseContext, uid)
                    .then((res) => {
                        return res;
                    })
            } else {
                return res.docs[0];
            }
        })
}