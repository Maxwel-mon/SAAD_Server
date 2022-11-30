const  tutoral_model = require ('../models/tutorial.model.js');


exports.tutorial_findall=(req,res ) => {
    
tutoral_model.find().then( tutoral => res.json('this are all your tutorials' + tutoral));

};

exports.tutorial_create=(req ,res ) => {

    const newtutorial = tutoral_model(req.body);
   // console.log(req.body.name);
    newtutorial.save().then( tutoral => res.json('this are all your tutorials' + tutoral)).catch( err => res.status(400).json('Error : ' + err));


};

exports.tutorial_find_one =(req,res ) => {


    tutoral_model.find(req.body).then( tutoral => res.json(' tutorials found' + tutoral)).catch( err =>  res.status(400).json('Error : ' + err));


};

exports.tutorial_deleteone =(req,res) => {

    tutoral_model.deleteOne(req.body).then( tutoral => res.json(' tutorials  deleted ' + tutoral)).catch( err =>  res.status(400).json('Error : ' + err));



};


//  implement the update method 
exports.tutorial_update = async (req, res) =>{


    /*tutoral_model.find(req.body).then(
     tutorial => {
       tutorial.name= req.body.name;
       tutorial.students_present= req.body.students_present; 
       tutorial.module_name= req.body.module_name;

    tutorial.save().then( ()=> res.json('exercise added')).catch( err => res.status(400).json('Error' + err));
*/

/*
     }).catch( err => res.status(400).json('Error' + err));
   
      console.log (req.body);
      console.log (req.body.name);
      console.log (req.body.students_present);
      console.log (req.body.module_name);

   const filter = JSON.stringify(req.body.name); 
   const update = toString(filter);
   console.log (update);
*/


  //  takes in the name of the tutorial and the student name to update 
  //  make sure the tutorial given exist in the database already 
  //  
  await tutoral_model.findOneAndUpdate( {

    name: req.body.name,
  }, 
    {
        $addToSet:{
    students_present : req.body.students_present} } ,
    {
    new: true
   }).then( updatedtutorial => res.json(' tutorial updated as ' + updatedtutorial)).catch(err => res.status(400).json('Error : ' + err));



};





//  given a tutorial name gets all the students present in that tutorial
exports.tutorial_studentsPresent =(req , res )=>{

      let studentspresent = [];
tutoral_model.find(req.body).then( studentspresen => {
studentspresent= JSON.stringify(req.body.students_present)
res.json(' students present are ' + studentspresent)
}
).catch(err => res.status(400).json('Error : ' + err));


console.log(JSON.stringify(req.body.students_present));
 res.send("NOT WORKING "); // get rid of and include logic 
};










