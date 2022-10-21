import {addDoc, getDocs, updateDoc, deleteDoc, query, where} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

export const fetchProductsByCategory = async (firebaseContext, categoryName) => {
    const q = query(
        firebaseContext,
        where("category", "==", categoryName)
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


export const addProduct = async(firebaseContext, product) => {
    return await addDoc(firebaseContext, product);
}

export const updateProduct = async(firebaseContext, product) => {
    return await updateDoc(firebaseContext, product);
}

export const deleteProduct = async(firebaseContext) => {
    return await deleteDoc(firebaseContext);
}

export const addProductImage = async(firebaseContext, productImage) => {
    const imageRef = ref(firebaseContext, `products/${v4()}`)
    return await uploadBytes(imageRef, productImage);
}

export const fetchProductImage = async(firebaseContext, imageName) => {
    const storageRef = ref(firebaseContext, imageName);
    return await getDownloadURL(storageRef)
}