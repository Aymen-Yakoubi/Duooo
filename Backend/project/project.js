const mongoose = require('mongoose');
const db = require('../db/index.js');


let projectSchema  = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  temp:String,
  category: ["action", "anime", "comedies","crime","horror"]
  
  });

 

let Project=mongoose.model('db',projectSchema)
 

module.exports = Project;