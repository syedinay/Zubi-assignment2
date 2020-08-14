const express=require('./node_modules/express');
const router=express.Router();
const userController=require('../controllers/user')
router.post('/register',userController.create);
router.post('/authen=ticate',userController.authenticate);
module.export=router;