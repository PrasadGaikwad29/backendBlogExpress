const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        ssl: true,  
      })
    .then(console.log("Database Connection is succesfull"))
    .catch((error)=>{
        console.log("Connection Issue In The Datatabase");
        console.log(error);
        process.exit(1);
    })
};
module.exports = connectWithDb;