const express = require('express');
const router = express.Router();


const userController = require('../controllers/users.controllers.js')

router.get('/', userController.hello)
router.get('/get-users', userController.getUsers)
router.get('/get-OneUser/:id', userController.getOneUser)
router.put('/update-user/:id', userController.updateUser)
router.post('/create-user', userController.createUser)
router.delete('/delete-user/:id', userController.deleteUser)

module.exports = router