const productModel = require("../models/Product.js");

exports.getAllProducts = (req,res) =>{
    // endpoint that will retrieve all products marked as bestsellers.
    if(req.query.productBestSeller){
        productModel.find()
        .where("productBestSeller").equals(req.query.productBestSeller)
        .then((bestSeller)=>{
            res.json({
                message : req.query.productBestSeller==="yes" ? `A list of all the bestseller products` : "A List of non-bestseller products",
                data : bestSeller,
                totatalBestSeller : bestSeller.length
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message : `Error${err}`
            })
        })
    }
    //all products that belong to a specified product category.
    else if(req.query.productCateogry){
        productModel.find()
        .where("productCateogry").equals(req.query.productCateogry)
        .then((cateogry)=>{
            res.json({
                message : `A list of products with the specified category ${req.query.productCateogry}`,
                data : cateogry,
                totatalSpecifiedProducts : cateogry.length
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message : `Error${err}`
            })
        })
    }
    //retrieves all the products
    else{
        productModel.find()
        .then(prodcuts=>{
            res.json({
                message : "A list of all the products",
                data : prodcuts,
                totatalProducts : prodcuts.length
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message : err
            })
        })
    }
}

exports.getAProdcutByID = (req,res) => {
    productModel.findById(req.params.id)
    .then((theProduct)=>{
        if(theProduct){
            res.json({
                message : `Product with the id ${req.params.id}`,
                data : theProduct
            })
        }
        else{
            res.status(404).json({
                message : `There is no Product in our database with the id${req.params.id}`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : err
        })
    })
}

exports.createProduct = (req,res) => {
    
    const product = new productModel(req.body);
    
    product.save()
    .then((newProduct)=> {
        res.json({
            message : "The Prodcut was successfully created and stored in the database."
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}

exports.updateProduct = (req,res)=>{
    productModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then(product=>{
        //if product is not null
        if(product){
            res.json({
                message : `The Product with the id${req.params.id} is updated`,
                data : product
            })
        }
        //if product is null
        else{
            res.status(404).json({
                message : `The Product with the ID ${req.params.id} was not found.`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : err
        })
    })
}

exports.deleteProduct=(req,res)=>{
    productModel.findByIdAndRemove(req.params.id)
    .then(product=>{
        if(product)//product is not null
        {
            res.json({
                message : `The Product with the ID ${req.params.id} was deleted.`
            })
        }
        else//product is null
        {
            res.status(404).json({
                message : `The Product with the ID ${req.params.id} was not found.`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : err
        })
    })
}