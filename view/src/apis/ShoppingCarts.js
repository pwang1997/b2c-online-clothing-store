import {addDoc, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {db} from "../firebase-config";

export const instantiateShoppingCart = async (firebaseContext, uid) => {
    // each user has his/her own unique shopping cart
    return await addDoc(firebaseContext, {
        uid: uid,
        products: {}
    });
}

export const fetchShoppingCartByUserId = async (firebaseContext, uid) => {
    const q = query(
        firebaseContext,
        where("uid", "==", uid)
    );
    return await getDocs(q);
}

export const updateShoppingCart = async (firebaseContext, cartDocId, cart) => {
    const docRef = doc(db, "shoppingCarts", cartDocId);
    return await updateDoc(docRef, cart);
}