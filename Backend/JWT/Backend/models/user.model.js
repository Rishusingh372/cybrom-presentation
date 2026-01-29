const mongoose = require("mongoose");

const empSchema= new mongoose.Schema ({

    username:String,
    email:String,
    password:String
})

module.exports= mongoose.model("employee", empSchema);