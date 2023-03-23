const express = require('express');
const cors =require('cors');
const router = require('./project/projectRouter')
const port = 5000;
const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());



app.use("/api/project",router)

app.listen(port, ()=>{
console.log(`listening on ${port}`);
})