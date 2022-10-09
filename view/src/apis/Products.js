import {React} from 'react';
import {getDocs, query, where} from "firebase/firestore";


export async function fetchProductsByCategory(firebaseContext, categoryName) {
    const q = query(
        firebaseContext,
        where("category", "==", categoryName)
    );

    return await getDocs(q);
}

export async function fetchAllProducts(firebaseContext) {
    const q = query(
        firebaseContext
    );

    return await getDocs(q);
}


export const fetchTrendingProducts = async (firebaseContext) => {}

export const fetchNewReleaseProducts = async (firebaseContext) => {}