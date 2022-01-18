const getPage = require('../services/brand')



exports.fetchBrands = async (req,res) => {
    const response = await getPage.fetchBrands();
    res.send({
        status : true,
        data : response
        
    })
}
exports.fetchCategories = async (req,res) => {
    const response = await getPage.categories();
    res.send({
        status : true,
        data : response
    })
}
exports.fetchSingleCategory = async (req,res) => {
    const response = await getPage.singleCategory(req.params.id);
    res.send({
        status : true,
        data : response
    })       
}
