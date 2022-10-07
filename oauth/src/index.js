const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./setup/passport-google-setup');

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'B2C-Oauth-Service',
    keys: ['key1', 'key2']
}))

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());


// // Example protected and unprotected routes
app.get('/api/v1/google/oauth/error', (req, res) => {
    res.send("An unknown error occurred in authentication...");
});

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// // In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/api/v1/google/oauth/success', isLoggedIn, (req, res) => {
    const data = {
        username: req.user.displayName,
        userImageLink: req.user.photos[0].value,
        source : 'google'
    }
    // save the data in cookie for 30 minutes.
    res.cookie(`user`, JSON.stringify(data), { expires: new Date(Date.now() + 30 * 60 * 1000), httpOnly: false });
    res.redirect('http://localhost:3000');
});

// // Auth Routes
app.get('/api/v1/google/oauth', passport.authenticate('google',
    { scope: ['profile', 'email'] }), (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
    });

app.get('/api/v1/google/oauth/callback', passport.authenticate('google',
    { failureRedirect: '/api/v1/google/oauth/error' }),
    async (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3001/api/v1/google/oauth/success');
    }
);

app.get('/api/v1/google/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/api/v1/google');
})

const PORT = process.env.SERVICE_PORT
app.listen(PORT, () => console.log(`Google OAuth middleware listening on port ${PORT}!`))