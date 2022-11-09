import {createContext, useContext} from "react";
import {collection} from "firebase/firestore";
import {db, storage} from "../firebase-config";

export const FirebaseUserCollectionContext = createContext(collection(db, "users"));

export function useFirebaseUserCollection() {
    return useContext(FirebaseUserCollectionContext);
}

export const FirebaseProductCollectionContext = createContext(collection(db, "products"));

export function useFirebaseProductCollection() {
    return useContext(FirebaseProductCollectionContext);
}

export const FirebaseStorageContext = createContext(storage);

export function useFirebaseStorage() {
    return useContext(FirebaseStorageContext);
}

export const FirebaseShoppingCartCollectionContext = createContext(collection(db, "shoppingCarts"));

export function useFirebaseShoppingCartCollection() {
    return useContext(FirebaseShoppingCartCollectionContext);
}

export const FirebaseOrderCollectionContext = createContext(collection(db, "orders"));

export function useFirebaseOrderCollectionContext() {
    return useContext(FirebaseOrderCollectionContext);
}