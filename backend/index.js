const connectToMongo = require("./db");
const express = require('express');

connectToMongo();
const app = express();
const port = 3000;

//middleware
app.use(express.json());

//Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log("Backend server Started succesfully at http://localhost:3000");
})


