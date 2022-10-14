const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.get('/', function (req, res) {
    res.send("PAYMENT GET Hello World!");
});

app.post('/checkout', function (req, res) {
    console.log("CHECKOUT POST", req.body.orderId);

});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port:${port}`);
});