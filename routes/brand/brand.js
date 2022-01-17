const express = require('express');

let router = express.Router();
let brandController = require('../../controllers/brand')


router.get('/brands', brandController.fetchBrands)
router.get('/categories',brandController.fetchCategories)
router.get('/category/:id',brandController.fetchSingleCategory)





module.exports = router;