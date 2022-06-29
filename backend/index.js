const connectToMongo = require("./db");
const express = require('express');

connectToMongo();
const app = express();
const port = 3000;

app.get('/',(req,res)=>[
    res.send("Heyo")
])
app.listen(port,()=>{
    console.log("Backend server Started succesfully at http://localhost:3000");
})


