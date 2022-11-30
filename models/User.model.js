
const mongoose = require('mongoose');


/*bcrypt = require('bcrypt');
    SALT_WORK_FACTOR = 10;
*/
 const Schema = mongoose.Schema;


const User_Schema = new Schema({
   
  name : {type : String, required : true , index:{unique : true }},
  password: { type : String, required : true}


})

const model_user = mongoose.model("users" , User_Schema);

module.exports= model_user; 