const mongoose = require('mongoose');
//  define a schema 
const Schema  = mongoose.Schema; 
//  create an instance of the schema 
const moduleSchema=new Schema  ({
 modulename: String ,
 moduleage: {type : Number},
}
)
const model_module = mongoose.model("subject100" ,moduleSchema);
module.exports = model_module;
