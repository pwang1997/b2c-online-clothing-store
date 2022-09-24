**# passport-example**

A simple practice of using OAuth library in Node.

### Usage
Start the program
``` 
npm start
```
Import Google Credentials
1.  https://console.developers.google.com/apis/credentials
2.  create project and Oauth 2.0 Client IDs
3.  add "http://localhost:3000/google/callback" and "http://localhost:3000/google/" to **Authorized redirect URIs**
4. save **Client ID** and **Client secret** to .env file

Import Facebook Credentials
1. https://developers.facebook.com/apps/
2. create app
3. add "http://localhost:3000/facebook/callback" to **Settings/Adanced/Share Redirect Allow List**
4. save **APP ID** and **App secret** to .env file