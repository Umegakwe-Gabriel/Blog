const express = require("express")
const { getAllBlogs, newBlog } = require("../Controller/BlogController2")

const BlogRoute2 = express.Router()

BlogRoute2.route("/GetAllBlogs").get(getAllBlogs)
BlogRoute2.route("/newBlog").get(newBlog)

module.exports = BlogRoute2