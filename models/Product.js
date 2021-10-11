const mongoose = require("mongoose");
const { Schema } = mongoose;

const prodcutSchema = new Schema({

    prodcutName : {
        type : String,
        required : true
    },
    productPrice : {
        type : Number,
        required : true
    },
    prdouctDescription : {
        type : String,
        required : true
    },
    productCateogry : {
        type : String,
        requierd : true
    },
    productQuantity : {
        type : Number,
    },
    productBestSeller : {
        type : Boolean,
        required : true
    },
    prodcutPhotoURL : {
        type : String
    }

});

const Product = mongoose.model('Product', prodcutSchema);
module.exports = Product;