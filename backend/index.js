const connectToMongo = require("./db");
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors())

//Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log("Backend server Started succesfully at http://localhost:5000");
})


