const express = require("express")
require("./Config/database")
const BlogRouter = require("./Router/BlogRouter")

const port = 3400;

const app = express();
app.use(express.json())
.use("/api", BlogRouter)

app.get("/", (req, res)=>{
    res.status(200).json({message: "Server is up and running"})
})

app.listen(port, ()=>{
    console.log("Server is listening to port", port);
})