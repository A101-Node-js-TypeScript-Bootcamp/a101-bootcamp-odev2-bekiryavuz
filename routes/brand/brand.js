const express = require('express');

let router = express.Router();
let brandController = require('../../controllers/brand')



//brand pages
router.get('/brands', brandController.fetchBrands)
router.get('/brands/:name', brandController.fetchBrandsName)
router.get('/categories',brandController.fetchCategories)
router.get('/category/:id',brandController.fetchSingleCategory)





module.exports = router;