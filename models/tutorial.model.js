const  mongoose = require ('mongoose');



const Schema = mongoose.Schema; 

const tutorial_schema = new Schema({

name : String, 
students_present :[String],    //  need to import  dbs 
module_name: String  // need to import module dbs 
 //date : {type : Date , required : true }

},{

timestamps: true, 

})


const model_tutorial = mongoose.model("tutoral" , tutorial_schema);

module.exports= model_tutorial; 