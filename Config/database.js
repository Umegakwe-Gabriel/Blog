const mongoose = require("mongoose")

const BDB = "mongodb://0.0.0.0:27017/BlogDatabase"

const Database = async()=>{
    try {
        const db = await mongoose.connect(BDB)
        console.log(`Database is connected to ${db.connection.host}`);
    } catch (error) {
        console.log("Couldn't connect to database");
    }
}

module.exports = Database();