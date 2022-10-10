import { getDocs, addDoc, query, where } from "firebase/firestore";


export const validateLogin = async (firebaseContext, email, password) => {
    const q = query(
        firebaseContext,
        where("email", "==", email),
        where("password", "==", password)
    )
    return await getDocs(q);
};

export const signupUserWithEmailPassword = async (firebaseContext, data) => {
    return await addDoc(firebaseContext, data);
};