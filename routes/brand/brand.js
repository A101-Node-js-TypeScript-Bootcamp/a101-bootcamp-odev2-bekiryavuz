const express = require('express');

let router = express.Router();
let brandController = require('../../controllers/brand')


router.get('/:id', brandController.fetchIdBrands)
router.get('/:name', brandController.fetchNameBrands)
router.get('/categories',brandController.fetchCategories)
router.get('/category',brandController.fetchCategory)





module.exports = router;