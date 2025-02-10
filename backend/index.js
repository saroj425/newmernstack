const express = require("express")
const app = express();
const router = require("./Rutes/userrouter")
require("./dbconn/dbConnection")
const cors = require("cors")
app.use(cors())
app.use(router);
app.use(express.json());



app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})