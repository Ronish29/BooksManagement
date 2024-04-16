const mongoose = require('mongoose')
require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL ,{

    }).then (() => {console.log("DB Connection successful");})
    .catch( (error) => {
        console.log("DB Connection failed");
        console.log(error);
        process.exit(1);
    })
}