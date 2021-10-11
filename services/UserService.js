const userModel = require("../models/User.js");

exports.createUser = (req,res) => {

    const user = new userModel(req.body);
    user.save()
    .then((newUser)=>{
        res.json({
            message : "The user is successfully created.",
            data : newUser
        })
    })
    .catch(err=>{
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};
exports.getAllUser = (req,res) =>{

    userModel.find()
    .then(allUser=>{
        res.json({
            message : "A list of all the user",
            data : allUser,
            totalCustomerNumber : allUser.length
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        })
    })
}
exports.getAUser = (req,res) => {
    userModel.findById(req.params.id)
    .then(user=>{
        if(user){
            res.json({
                message : `User with the id ${req.params.id}`,
                data : user
            })
        }
        else{
            res.status(404).json({
                message : `There is no User in our Database with the id ${req.params.id}`
            })
        }
    })
    .catch(err =>{
        res.status(500).json({
            message : err
        })
    })
    
}