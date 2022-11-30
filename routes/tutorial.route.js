


const router = require ('express').Router();
const tutorial_controller = require ('../controller/tutorial.controller.js');


router.get('/', tutorial_controller.tutorial_findall);
router.post ('/add', tutorial_controller.tutorial_create);

router.get ( '/find', tutorial_controller.tutorial_find_one);
router.delete( '/delete', tutorial_controller.tutorial_deleteone);

router.post ('/update' ,tutorial_controller.tutorial_update);

// gets present students given a module name //  not working 
router.get('/present' ,  tutorial_controller.tutorial_studentsPresent);

/*




*/
module.exports=router;