import {useContext, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFirebaseShoppingCartCollection, useFirebaseUserCollection} from "../../context/FirebaseContext";
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie';
import {signupUserService} from '../../services/UserService';
import {fetchShoppingCartByUserIdService} from "../../services/ShoppingCartService";
import {CartContext} from "../../context/CartContext";


const theme = createTheme();

export default function SignUp() {
    const userCollectionRef = useFirebaseUserCollection();
    const shoppingCartCtx = useFirebaseShoppingCartCollection();
    const cartContext = useContext(CartContext);

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user', 'shoppingCart']);

    useEffect(() => {
        // prevent logged-in user accessing sign-up
        if (cookies['user']) {
            navigate('/');
        }
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const password = formData.get('password');

        if (!firstName || !lastName || !email || !password) {
            alert("Inputs must not be empty!");
            return;
        }

        const data = {
            username: `${firstName} ${lastName}`,
            email: email,
            password: password
        }

        signupUserService(userCollectionRef, data)
            .then((res) => {
                const user = {
                    uid: res.id,
                    username: data.username,
                    email: data.email
                };

                setCookie('user', JSON.stringify(user), {
                    path: '/',
                    expires: new Date(Date.now() + 30 * 60 * 1000),
                    httpOnly: false
                });
                return user;
            })
            .then((user) => {
                fetchShoppingCartByUserIdService(shoppingCartCtx, user?.uid)
                    .then((cartDocs) => {
                        // create a local empty cart, since the server has created the cart but not returning the data
                        const cartData = {
                            uid : user.uid,
                            products : {}
                        };
                        localStorage.setItem('cart', JSON.stringify(cartData));
                        cartContext.setCart(cartData);
                        // save cart id to cookie
                        setCookie('shoppingCart', JSON.stringify({cartId: cartDocs.id}), {
                            path: '/',
                            expires: new Date(Date.now() + 30 * 60 * 1000)
                        });

                        navigate("/");
                    })
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="sign-in" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}