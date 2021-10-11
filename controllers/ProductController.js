const express = require("express")
const router = express.Router()
const productService = require("../services/ProductService.js")
//Create a Product
router.post("/",productService.createProduct);
//Get All The Products
router.get("/", productService.getAllProducts);
//Get All The Categories

//Get All The products By Category

//Get All the Products Marked Bestseller

//Get A Product By ID
router.get("/:id",productService.getAProdcutByID)
//Update An Product By ID
router.put("/:id",productService.updateProduct);
//Delete A Product By ID
router.delete("/:id",productService.deleteProduct);


module.exports = router