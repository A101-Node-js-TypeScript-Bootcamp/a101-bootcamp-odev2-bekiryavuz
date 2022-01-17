const getPage = require('../services/brand')



exports.fetchIdBrands = async (req,res) => {
    const response = await getPage.fetchIdBrands();
    res.send({
        status : true
        
    })
}
exports.fetchNameBrands = async (req,res) => {
    const response = await getPage.fetchNameBrands(brandName);
    res.send({
        status : true
    })
}
exports.fetchCategories = async (req,res) => {
    res.send({
        status : true
    })
}
exports.fetchCategory = async (req,res) => {
    res.send({
        status : true
    })
}
