const express = require("express")
const BlogModel = require("../Model/BlogModel")

const getAllBlogs = async(req, res)=>{
try {
    const Blogs = await BlogModel.find()
    res.status(200).json({message: "These are all the blogs", data: Blogs})
} catch (error) {
    res.status(404).json({message: "Couldn't get the blogs", error})
}
}

const newBlog = async(req, res)=>{
    try {
        const {title, content, writer, address, contact} = req.body
        const Blog = await BlogModel.create({
            title, content, writer, address, contact
        })
        res.status(200).json({message: "New Blog created", data: Blog})
    } catch (error) {
        res.status(400).json({message: "Couldn't create new blog", error})
    }
}

module.exports = {getAllBlogs, newBlog}