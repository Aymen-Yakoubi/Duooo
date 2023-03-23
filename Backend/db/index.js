const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const mongoUri = 'mongodb://127.0.0.1/project';
mongoose.connect(mongoUri).then(()=>console.log('created')).catch((err)=>console.log(err));
let db;

module.exports = db;