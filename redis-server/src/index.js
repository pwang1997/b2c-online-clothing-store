const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');

// routers
const ProductRoutes = require("./routes/ProductRoutes");

dotenv.config()

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// routers
app.use("/products", ProductRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Redis Server Listening at ${PORT}`));