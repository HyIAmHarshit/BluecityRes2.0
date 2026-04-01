const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Server is connected to db");
    }).catch(err=>{
        console.log("Error occure during connection db"+err)
        console.log("Error occure during connection db"+err)
        process.exit(1);
    })
}

module.exports=connectToDB;