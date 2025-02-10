const mongoose = require("mongoose")
const User = require("../modal/userSchema")

exports.getuser = async(req,res)=>{
    res.send("This is from controller")
}

exports.registeruser = async(req,res)=>{
    const file = req.file.filename;
    const {name,email,password} = req.body;
    if(!name || !email || !password || !file){
        res.status(400).send("Please fill all your fields")
    }
    const userexist = await User.findOne({email:email})
    if(userexist){
        res.status(400).send("Already exist")
    }
    try {
            const newuser = new User({name,email,password,img:file})
            const resposne = await newuser.save()
            res.status(200).json({message:"User registered successsfully", user:resposne})
            
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Server error"})
    }
    // console.log(req.file);
    // console.log(req.body)
    // res.send("User registered successfully")
}