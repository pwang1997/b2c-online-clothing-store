import { createContext, useContext } from "react";
import { collection } from "firebase/firestore";
import { db } from "../firebase-config";

export const FirebaseUserCollectionContext = createContext(collection(db, "users"));

export function useFirebaseUserCollection() {
    return useContext(FirebaseUserCollectionContext);
}

export const FirebaseProductCollectionContext = createContext(collection(db, "products"));

export function useFirebaseProductCollection() {
    return useContext(FirebaseProductCollectionContext);
}