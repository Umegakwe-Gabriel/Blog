const mongoose = require("mongoose")

const BDBs = "mongodb://0.0.0.0:27017/BlogDatabase"

const Database2 = async()=>{
try {
    const db2 = await mongoose.connect(BDBs)
    console.log(`Database is now connected to ${db2.connection.host}`);
} catch (error) {
    console.log("Couldn't connect to database");
}
}

module.exports = Database2();