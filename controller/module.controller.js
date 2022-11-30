const model_module = require('../models/module.model.js');

let subject= model_module;
//require ('./models/module.js');

exports.module_find_all =(req , res )=> {
   
  
  subject.find().then(modules => res.json(modules +"this is database"));
    
  };



 exports.module_create = (req,res ) =>{
  const a =JSON.stringify(req.body);
  const b= JSON.parse(a);    //  only takes in JSON obbjects hence make sure the input is always ion JSON

  var b1=b;
   var c= a.split('{').join();
   var d = c.split('}').join (',');
   var e = d.split('').join(',');
  // res.send(" allternetive post method not implemented");
  console.log(b);
  //console.log(newtest);
 // console.log(log);

   const modulename1=req.body.modulename; 
  // await M0dulename1.create({modulename1});
    
/*    WORST BUG OF MY LIFE 

  const newmodule= new subject({req.body});
  https://www.appsloveworld.com/mongodb/100/97/mongoose-saves-empty-object-but-object-is-not-empty-nodejs
  
*/
    const newmodule= new subject(b);
  newmodule.save().then(()=> res.json('module added /n /n '+ newmodule)).catch ( err => res.status(400).json('Error :' +err)); 
      
 }; 


exports.module_findone= (req, res) =>
{
  // res.send("not yet implemented to gind a specific module");
  subject.findOne(req.body).then( module =>res.json('module exist /n' + module.modulename)).catch ( err => res.status(400).json('Error :' +err)); 
      
}; 


exports.module_delete=( req,res)=>{

   // res.send(" not yet implemented delete a module given the name");
  subject.deleteOne(req.body).then(module => res.send('module deleted is /n /n '  + JSON.stringify(module))).catch(err => res.status (400) .json('Error : ' + err));


};

/* router.post('/add', function (req,res ){
     
 // subject.collection('subjects').insert(req.body)
  subject().collection('subjects').insert(req.body,function(err,result){
if(err)
res.send('err');
else 
res.send('success');
  })
      
  });
*/

// 
// router.route('/add').post((req,res) => {
//   //res.json.body
//   const modulename1=req.body.modulename; 

//     const newmodule= new subject({modulename1});
//   newmodule.save().then(()=> res.json('module added')).catch ( err => res.status(400).json('Error :' +err));

//  })


//module.exports = router; 
 