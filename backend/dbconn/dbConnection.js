const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/mernprojectsagar").then(()=>{
    console.log("Connsection successfull")
}).catch((error)=>{
    console.log(error)
})