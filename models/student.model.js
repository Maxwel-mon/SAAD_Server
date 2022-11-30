
const mongoose = require ('mongoose');


const Schema = mongoose.Schema;


const studentSchema = new Schema({
 
name: String,



})

const model_student = mongoose.model("student" , studentSchema);

module.exports = model_student ;