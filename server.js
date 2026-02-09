require("dotenv").config()
const app = require("./src/app")
const connectBD = require("./src/db/db")


connectBD()

app.listen(3000, ()=>{
    console.log("Servere is running on port 3000");
    
})