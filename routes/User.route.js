var router = require('express').Router();


const User_controller = require ('../controller/User.controller.js');


router.post ('/add', User_controller.User_createone);

router.get ( '/find', User_controller.User_Findone);
router.delete( '/delete', User_controller.User_deletone);


/*




*/
module.exports=router;