const mongoose = require("mongoose")


async function connectBD(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected");
        
    }
    catch(err){
        console.error('Error connecting to the database:', err);
    }
}

module.exports = connectBD;