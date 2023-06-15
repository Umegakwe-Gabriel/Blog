const express = require("express")
const BlogModel2 = require("../Model/BlogModel2")

const getAllBlogs = async(req, res)=>{
    try {
        const Blogs2 = await BlogModel2.find()
        res.status(200).json({message: "List of Blogs", data: Blogs2})
    } catch (error) {
        res.status(400).json({message: "Couldn't get the blogs", data: error})
    }
}

const newBlog = async(req, res)=>{
    try {
        const {title, content, writer, address, contact} = req.body;
        const Blog = await BlogModel2.create({
            title, content, writer, address, contact
        })
        res.status(200).json({message: "New blog created", data: Blog})
    } catch (error) {
        res.status(400).json({message: "Couldn't create new blog", error})
    }
}