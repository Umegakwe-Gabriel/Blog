const express = require("express")
const { getAllBlogs, newBlog } = require("../Controller/BlogController")
const BlogRoute = express.Router()

BlogRoute.route("/AllBlogs").get(getAllBlogs)
BlogRoute.route("/newBlog").post(newBlog)

module.exports = BlogRoute