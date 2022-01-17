const axios = require ('axios')

exports.fetchIdBrands = async () =>{
    const response = await axios.get('https://api.trendyol.com/sapigw/brands');
    return response.data;
}
exports.fetchNameBrands = async (brandName) =>{
    const response = await axios.get('https://api.trendyol.com/sapigw/brands/by-name?name={brandName}');
    return response.data;
}/*
exports.fetch = async () =>{
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${}/attributes`);
    return response.data;
}
exports.fetch = async () =>{
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${}/attributes`);
    return response.data;
}*/
