
let user = require ('../models/student.model.js');



exports.student_findall=(req ,res)=>{

   user.find().then(users => res.json('this are your students'+ users))

};

exports.student_create=(req ,res)=>{
console.log (req.body);


   const newuser = new user(req.body)

   newuser.save().then( users => res.json(' new user added ' + users )).catch(err=> res.status (400) .json('  Error :'+ err) );
   // res.send("not implemented yet ");


};
exports.student_find_one=(req ,res)=>{
    
   // res.send("not implemented yet ");
    
    user.findOne(req.body).then( users => res.json(' user found ' + users)).catch( err => res.status(400). json (' Error : ' + err ));
    
    
};

exports.student_delete_one=(req ,res)=>{
    
    
    user.deleteOne(req.body).then( users => res.json('user deleted '+  users)).catch( err => res.status(400). json ('Erorr :' + err));
  //  res.send("not implemented yet ");

};



//module.exports=router;