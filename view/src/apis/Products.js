import { getDocs, query, where } from "firebase/firestore";


export const fetchProductsByCategory = async (firebaseContext, categoryName) => {
    const q = query(
        firebaseContext,
        where("category", ">=", categoryName)
    );

    return await getDocs(q);
}

export const fetchProductByProductName = async (firebaseContext, productName) => {
    const q = query(
        firebaseContext,
        where("productName", ">=", productName)
    )
    return await getDocs(q);
}

export const fetchAllProducts = async (firebaseContext) => {
    const q = query(
        firebaseContext
    );

    return await getDocs(q);
}


export const fetchTrendingProducts = async (firebaseContext) => { }

export const fetchNewReleaseProducts = async (firebaseContext) => { }