require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => { //async cos making external call
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error)
    }
}

connection();