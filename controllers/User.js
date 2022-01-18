






exports.register = (req,res) =>{
    if(req.body.email === "contact@bekiryavuz.com"){
        res.send({
            status : false,
            message: 'Bu kullanici mevcuttur'
        })
    }else{
        res.send({
            status: false,
            message: 'Bir problem yok'
        })
    }
}


