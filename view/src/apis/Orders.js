import {addDoc, getDocs, query, where} from "firebase/firestore";

export const submitOrder = async (firebaseContext, orderSummary) => {
    return await addDoc(firebaseContext, orderSummary);
};

export const fetchOrderHistory = async(firebaseContext, uid) => {
    const q = query(
        firebaseContext,
        where("uid", "==", uid)
    );

    return await getDocs(q);
}