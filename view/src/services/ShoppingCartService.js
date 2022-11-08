import {fetchShoppingCartByUserId, instantiateShoppingCart, updateShoppingCart} from "../apis/ShoppingCarts";


export const fetchShoppingCartByUserIdService = async (firebaseContext, uid) => {
    return await fetchShoppingCartByUserId(firebaseContext, uid)
        .then((snapshot) => {
            console.log({type: "snapshot", snapshot});
            if (snapshot.empty) {
                return instantiateShoppingCart(firebaseContext, uid)
                    .then((docRef) => {
                        console.log({type: "docRef", docRef});
                        return docRef;
                    })
            } else {
                return snapshot.docs[0];
            }
        })
}

export const updateShoppingCartService = async (firebaseContext, cartDocId, cart) => {
    await updateShoppingCart(firebaseContext, cartDocId, cart);
}