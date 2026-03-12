const express = require("express")

const app = express()

app.get("/", (req,res)=>{
res.send("Warden Bot Engine Running 🚀")
})

app.listen(3000,()=>{
console.log("Server running")
})
