const BlogMongo = require("mongoose")

const BlogSchema2 = BlogMongo.Schema({
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

const BlogModel2 = BlogMongo.model("How long can you wait", BlogSchema2)

module.exports = BlogModel2