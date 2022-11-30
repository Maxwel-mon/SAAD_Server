var User = require('../models/User.model.js');


exports.User_createone = (req, res)=>{

   const newuser = User(req.body);
   // console.log(req.body.name);
    newuser.save().then( user => res.json('user added ' + user)).catch( err => res.status(400).json('Error : ' + err));

  /* 
  user password needs to be encrypted before being stord to the datatbase   
  not yet inplemented */


}


exports.User_deletone =(  req, res ) => 
{

   User.deleteOne(req.body).then( user => res.json(' user  deleted ' + user)).catch( err =>  res.status(400).json('Error : ' + err));




}

exports.User_Findone=(  req, res ) => 
{


   User.find(req.body).then( user => res.json(' user found' + user)).catch( err =>  res.status(400).json('Error : ' + err));



}