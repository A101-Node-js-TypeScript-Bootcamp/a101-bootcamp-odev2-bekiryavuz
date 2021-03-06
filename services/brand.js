const axios = require ('axios')


//trendyol data api functions

exports.fetchBrands = async (req,res) =>{
    try{
        const response = await axios.get('https://api.trendyol.com/sapigw/brands');
        return {
            status : true,
            data : response.data
        }
    }catch{
        return{
            status : false,
            message : 'böyle bir data mevcut değil'
        }
    }   
}
exports.fetchBrandsName = async (brandName) =>{
    try{
        const response = await axios.get(`https://api.trendyol.com/sapigw/brands/by-name?name=${brandName}`);
        return {
            status : true,
            data : response.data
        }
    }catch{
        return{
            status : false,
            message : 'böyle bir data mevcut değil'
        }
    }   
}
exports.categories = async (req,res) =>{
    try{
        const response = await axios.get('https://api.trendyol.com/sapigw/product-categories');
        return {
            status : true,
            data : response.data
        }
    }catch{
        return{
            status : false,
            message : 'böyle bir data mevcut değil'
        }
    }  
}
exports.singleCategory = async (id) =>{
    try{
        const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${id}/attributes`);
        return {
            status : true,
            data : response.data
        }
    }catch{
        return{
            status : false,
            message : 'böyle bir data mevcut değil'
        }
    }   
}
