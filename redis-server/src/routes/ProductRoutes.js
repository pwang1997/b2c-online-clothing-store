const express = require('express');
const ProductController = require("../controllers/ProductController");

const router = express.Router();


router.post('/api/v1/image/fetch', ProductController.fetchLeetCodeSolution);

router.post('/api/v1/image/fetch', ProductController.fetchLeetCodeSolution);


module.exports = router;
