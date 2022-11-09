import {addDoc} from "firebase/firestore";

export const submitOrder = async (firebaseContext, orderSummary) => {
    return await addDoc(firebaseContext, orderSummary);
};