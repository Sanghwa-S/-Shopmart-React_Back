const express = require("express"); // import 'express' Module 
const mongoose = require("mongoose");
require('dotenv').config({path: 'config/keys.env'});

const app = express();              // create express's object called 'app'
app.use(express.json());
const path = require("path");

const productController = require("./controllers/ProductController.js");
const userController = require("./controllers/UserController.js");

app.use("/user",userController);
app.use("/prodcuts",productController);

app.listen(process.env.PORT, ()=> {             //My web server application listens to incomming HTTP REQ
    console.log(`RESTful API is up and running on ${process.env.PORT}`);  //and then return outgoing HTTP RES
    mongoose.connect(process.env.MONGODB_QUERY_STRING) //여기에 이 connect를 넣은 이유는 내 서버가 제대로 작동된뒤 몽구스랑 연결하기 위해서이다.
    .then(()=> {
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })
})