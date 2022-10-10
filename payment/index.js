const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000/'
}))

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/checkout', function (req, res) {
    console.log(res.data.orderId);
    res.send(res.data.orderId);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port:${port}`);
});