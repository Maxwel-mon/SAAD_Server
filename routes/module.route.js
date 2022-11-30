
const router = require ('express').Router();


//  require controller module
const module_controller = require('../controller/module.controller.js');


router.get('/' ,module_controller.module_find_all);


router.post('/add', module_controller.module_create);


router.get('/find' ,  module_controller.module_findone);


router.delete('/delete', module_controller.module_delete);


module.exports=router;