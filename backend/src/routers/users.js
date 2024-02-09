const {Router} = require('express');
const router = Router();
const UsersCtrl = require('../controllers/UsersController') 

router
    .get('/', UsersCtrl.listUsers)
    .post('/',UsersCtrl.createUser)
    .get('/:id',UsersCtrl.listUserById)
    .delete('/:id',UsersCtrl.deleteUser)
    .put('/:id',UsersCtrl.updateUser)



module.exports = router;