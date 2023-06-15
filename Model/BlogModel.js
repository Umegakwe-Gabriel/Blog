const BlogMongo = require("mongoose")

const BlogSchema = BlogMongo.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    writer: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
})

const BlogModel = BlogMongo.model("The Second Coming of Jesus", BlogSchema)

module.exports = BlogModel