const multer = require("multer")

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const filefilter = (req,file,callback)=>{
    if(file.mimetype ==="image/png" || file.mimetype === "image/jpg" || file.filename === "image/jpeg"){
        callback(null,true)
    }else{
        callback(null,false);
        callback(new Error("Only Image allowed"))
    }
}

const upload = multer({
    storage:storage,
    fileFilter:filefilter
})

module.exports = upload;