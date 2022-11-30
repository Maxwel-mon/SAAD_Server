const router = require ('express').Router();

const student_controller = require ('../controller/student.controller');




router.get('/', student_controller.student_findall);

router.post('/add', student_controller.student_create);

router.get('/find', student_controller.student_find_one);

router.delete('/delete', student_controller.student_delete_one);



module.exports=router;