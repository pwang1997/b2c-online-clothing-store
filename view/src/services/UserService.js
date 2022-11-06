import { validateLogin, signupUserWithEmailPassword } from '../apis/Users';


export const validateLoginService = async (
    firebaseContext,
    data,
    setEmail,
    setPassword,
    setCookie,
    navigate) => {

    const { email, password } = data;

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
            uid : res.docs[0].id,
            ...res.docs[0].data()
        }
        // save to cookie for 30 minutes
        // if(remember) {
        setCookie('user', JSON.stringify(userDocs), { path: '/', expires: new Date(Date.now() + 30 * 60 * 1000), httpOnly: false });
        // }

        navigate("/");
    }).catch((err) => {
        console.log(err);
    });
}

export const signupUserService = async (firebaseContext, data, setCookie, navigate) => {

    signupUserWithEmailPassword(firebaseContext, data).then(() => {
        // if success, save user email/password to cookie
        data.source = 'firebase'; // add attribute: source to distinguish user data from google-oauth or firebase

        setCookie('user', JSON.stringify(data), { path: '/', expires: new Date(Date.now() + 30 * 60 * 1000), httpOnly: false });

        navigate("/");
    }).catch((err) => {
        console.log(err);
    });
}