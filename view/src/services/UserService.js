import {validateLogin, signupUserWithEmailPassword, fetchUserByEmail} from '../apis/Users';


export const validateLoginService = async (
    firebaseContext,
    data,
    setEmail,
    setPassword,
    setCookie,
    navigate) => {

    const {email, password} = data;

    if (!email || !password) {
        return;
    }
    validateLogin(firebaseContext, email, password).then((res) => {
        // if user not found
        if (res.docs.length === 0) {
            alert("Failed to login. Please check your inputs.");
            // reset inputs to default
            setEmail("");
            setPassword("");
            return;
        }
        const userDocs = {
            uid: res.docs[0].id,
            ...res.docs[0].data()
        }
        // save to cookie for 30 minutes
        // if(remember) {
        setCookie('user', JSON.stringify(userDocs), {
            path: '/',
            expires: new Date(Date.now() + 30 * 60 * 1000),
            httpOnly: false
        });
        // }

        navigate("/");
    }).catch((err) => {
        console.log(err);
    });
}

export const signupUserService = (firebaseContext, data, setCookie, navigate) => {
    fetchUserByEmailService(firebaseContext, data?.email)
        // check if there is user with same email
        .then((res) => {
            if(!res.empty) {
                alert( "USER EMAIL TAKEN");
                return Promise.reject({status: 400, code: "USER EMAIL TAKEN"});
            }
        })
        // insert user to firebase/users
        .then(() => {
            signupUserWithEmailPassword(firebaseContext, data).then(() => {
                // if success, save user email/password to cookie

                setCookie('user', JSON.stringify(data), {
                    path: '/',
                    expires: new Date(Date.now() + 30 * 60 * 1000),
                    httpOnly: false
                });

                navigate("/");
            })
        })
        .catch((err) => {
            console.error(err)
        });
}

export const signupOAuthUserService = (firebaseContext, data, setCookie, navigate) => {
    fetchUserByEmailService(firebaseContext, data?.email)
        // check if there is user with same email
        .then((res) => {
           if(!res.empty) {
                const user = {
                    uid : res.docs[0].id,
                    ...data
                };

                setCookie('user', JSON.stringify(user), {
                    path: '/',
                    expires: new Date(Date.now() + 30 * 60 * 1000),
                    httpOnly: false
                });

                navigate("/");
            }
           return res.empty;
        })
        // insert user to firebase/users
        .then((toProceed) => {
            console.log(toProceed);
            if(toProceed) {
                signupUserWithEmailPassword(firebaseContext, data).then((res) => {
                    // if success, save user to cookie
                    const user = {
                        uid : res.id,
                        ...data
                    };
                    
                    setCookie('user', JSON.stringify(user), {
                        path: '/',
                        expires: new Date(Date.now() + 30 * 60 * 1000),
                        httpOnly: false
                    });

                    navigate("/");
                })
            }

        })
        .catch((err) => {
            console.error(err)
        });
}

export const fetchUserByEmailService = async (firebaseContext, email) => {

    return await fetchUserByEmail(firebaseContext, email);
}