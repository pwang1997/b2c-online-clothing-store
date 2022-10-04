import {Button, Dialog, DialogContent, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {addDoc} from "firebase/firestore";
import {useContext, useState} from "react";
import {FirebaseUserCollectionContext} from "../../../context/ContextStorage";


const UserLoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userCollectionRef = useContext(FirebaseUserCollectionContext)


    const signupUserWithEmailPassword = async () => {
        await addDoc(userCollectionRef, {email: email, password: password});
    };

    const handleSignup = async () => {
        const handleClose = props.handleClose;

        signupUserWithEmailPassword().then(() => {
            handleClose();
        });
    };

    const handleLogin = (e) => {

    };

    const handleGoogleLogin = (e) => {

    };

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item marginTop={6} xs={12} md={12}>
                        <Typography id="web-modal-title" variant="h6" component="h6" align={"center"}>
                            Welcome to Clothing Store
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="email" label="Email"
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }}
                                   value={email}
                                   fullWidth required/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            id="password"
                            label="password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            fullWidth required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="outlined" onClick={handleLogin} fullWidth>Log in</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="outlined" onClick={handleSignup} fullWidth>Sign up</Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={handleGoogleLogin} fullWidth>Login with
                            Google</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};
export default UserLoginForm;