const express = require('express');
const ProductController = require("../controllers/ProductController");
const {db} = require("../firebase-config");
const router = express.Router();


router.get('/fetch/find-all', ProductController.fetchAllProducts);
router.get('/fetch/', ProductController.fetchProductByCondition);
router.get('/image/get/', ProductController.fetchProductImage);
router.post('/image/set/', ProductController.setProductImageUrl);

module.exports = router;
