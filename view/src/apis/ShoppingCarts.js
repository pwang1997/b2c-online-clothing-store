import {addDoc, getDocs, query, where} from "firebase/firestore";

export const instantiateShoppingCart = async(firebaseContext, uid) => {
    // each user has his/her own unique shopping cart
    return await addDoc(firebaseContext, {
        uid : uid,
        products : {}
    });
}

export const fetchShoppingCartByUserId = async(firebaseContext, uid) => {
    const q = query(
        firebaseContext,
        where("uid", "==", uid)
    );
    return await getDocs(q);
}

