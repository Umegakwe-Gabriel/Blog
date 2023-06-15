const express = require("express")

const port = 4500;

const app = express();
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({message: "Server is up and running"})
})

app.listen(port, ()=>{
    console.log("Server is listening to port", port);
})