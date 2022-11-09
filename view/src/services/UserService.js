import {fetchUserByEmail, signupUserWithEmailPassword, validateLogin} from '../apis/Users';


export const validateLoginService = async (
    firebaseContext,
    data) => {

    const {email, password} = data;

    if (!email || !password) {
        return;
    }
    return await validateLogin(firebaseContext, email, password)
        .then((res) => {
            // if user not found
            if (res.docs.length === 0) {
                alert("Failed to login. Please check your inputs.");
                return Promise.reject({status: 400, code: "INVALID USER INPUT(S)"})
            }

            return {
                uid: res.docs[0].id,
                email : res.docs[0].data().email,
                username : res.docs[0].data().username
            }
        });
}

export const signupUserService = async (firebaseContext, data) => {
    return await fetchUserByEmailService(firebaseContext, data?.email)
        // check if there is user with same email
        .then((res) => {
            if (!res.empty) {
                alert("USER EMAIL TAKEN");
                return Promise.reject({status: 400, code: "USER EMAIL TAKEN"});
            }
        })
        // insert user to firebase/users
        .then(() => {
            return signupUserWithEmailPassword(firebaseContext, data);
        });
}

export const signupOAuthUserService = async (firebaseContext, data) => {
    return await fetchUserByEmailService(firebaseContext, data?.email)
        // check if there is user with same email
        .then((res) => {
            return {
                proceed: res.empty,
                user: {
                    uid: res?.docs[0]?.id,
                    email : data?.email,
                    username : data?.username
                }
            };
        })
        // insert user to firebase/users
        .then((response) => {
            // if no user with the same email, insert user
            if (response.proceed) {
                return signupUserWithEmailPassword(firebaseContext, data).then((res) => {
                    // if success, update user in the response
                    return {
                        uid: res.id,
                        email : data?.email,
                        username : data?.username
                    };
                })
            } else {
                return response.user;
            }
        });
}

export const fetchUserByEmailService = async (firebaseContext, email) => {
    return await fetchUserByEmail(firebaseContext, email);
}