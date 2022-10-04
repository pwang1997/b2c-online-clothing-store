import {createContext} from "react";
import {collection} from "firebase/firestore";
import {db} from "../firebase-config";

export const FirebaseUserCollectionContext = createContext(collection(db, "users"));