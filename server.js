require("dotenv").config()
const app = require("./src/app")
const connectBD = require("./src/db/db")


connectBD()

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})